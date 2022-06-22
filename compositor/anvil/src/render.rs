use smithay::{
    backend::renderer::{Frame, ImportAll, Renderer},
    desktop::{
        draw_window, draw_window_popups,
        space::{RenderElement, RenderError, Space},
    },
    reexports::wayland_server::DisplayHandle,
    utils::{Physical, Rectangle},
    wayland::output::Output,
};

use crate::{drawing::*, shell::FullscreenSurface};

pub fn render_output<R, E>(
    dh: &DisplayHandle,
    output: &Output,
    space: &mut Space,
    renderer: &mut R,
    age: usize,
    elements: &[E],
    log: &slog::Logger,
) -> Result<Option<Vec<Rectangle<i32, Physical>>>, RenderError<R>>
where
    R: Renderer + ImportAll,
    R::TextureId: 'static,
    E: RenderElement<R>,
{
    if let Some(window) = output
        .user_data()
        .get::<FullscreenSurface>()
        .and_then(|f| f.get())
    {
        let transform = output.current_transform().into();
        let mode = output.current_mode().unwrap();
        let scale = output.current_scale().fractional_scale();
        let output_geo = space
            .output_geometry(output)
            .unwrap_or_else(|| Rectangle::from_loc_and_size((0, 0), (0, 0)));
        renderer
            .render(mode.size, transform, |renderer, frame| {
                let mut damage = window.accumulated_damage((0.0, 0.0), scale, None);
                frame.clear(
                    CLEAR_COLOR,
                    &[Rectangle::from_loc_and_size((0, 0), mode.size).to_f64()],
                )?;
                draw_window(
                    dh,
                    renderer,
                    frame,
                    &window,
                    scale,
                    (0.0, 0.0),
                    &[Rectangle::from_loc_and_size((0, 0), mode.size)],
                    log,
                )?;
                draw_window_popups(
                    dh,
                    renderer,
                    frame,
                    &window,
                    scale,
                    (0.0, 0.0),
                    &[Rectangle::from_loc_and_size((0, 0), mode.size)],
                    log,
                )?;
                for elem in elements {
                    let geo = elem.geometry(scale);
                    let location = elem.location(scale) - output_geo.loc.to_physical_precise_round(scale);
                    elem.draw(
                        dh,
                        renderer,
                        frame,
                        scale,
                        location,
                        &[Rectangle::from_loc_and_size((0, 0), mode.size)],
                        log,
                    )?;
                    damage.extend([Rectangle::from_loc_and_size((0, 0), geo.size)]);
                }
                Ok(Some(damage))
            })
            .and_then(std::convert::identity)
            .map_err(RenderError::<R>::Rendering)
    } else {
        space.render_output(dh, &mut *renderer, output, age as usize, CLEAR_COLOR, &*elements)
    }
}
