#![warn(rust_2018_idioms)]
// If no backend is enabled, a large portion of the codebase is unused.
// So silence this useless warning for the CI.
#![cfg_attr(
    not(any(feature = "winit", feature = "x11", feature = "udev")),
    allow(dead_code, unused_imports)
)]

#[macro_use]
extern crate slog;
use cfg_if::cfg_if;
#[cfg(feature = "udev")]
pub mod cursor;
pub mod drawing;
pub mod input_handler;
pub mod render;
pub mod shell;
pub mod state;
#[cfg(feature = "udev")]
pub mod udev;
#[cfg(feature = "winit")]
pub mod winit;
#[cfg(feature = "x11")]
pub mod x11;
#[cfg(feature = "xwayland")]
pub mod xwayland;

pub use state::{AnvilState, CalloopData, ClientState};
// main.rs

use slog::{o, Drain};

#[cfg(target_os = "android")]
use jni_android_sys::android::content::Context;
#[cfg(not(target_os = "android"))]
use slog::crit;
cfg_if! {
    if #[cfg(not(target_os = "android"))] {
        static POSSIBLE_BACKENDS: &[&str] = &[
            #[cfg(feature = "winit")]
            "--winit : Run anvil as a X11 or Wayland client using winit.",
            #[cfg(feature = "udev")]
            "--tty-udev : Run anvil as a tty udev client (requires root if without logind).",
            #[cfg(feature = "x11")]
            "--x11 : Run anvil as an X11 client.",
        ];
    }
}

#[cfg_attr(
    target_os = "android",
    ndk_glue::main(logger(level = "debug", tag = "waylovely"), backtrace = "on")
)]
pub fn main() {
    // A logger facility, here we use the terminal here
    let log = if std::env::var("ANVIL_MUTEX_LOG").is_ok() {
        slog::Logger::root(std::sync::Mutex::new(slog_term::term_full().fuse()).fuse(), o!())
    } else {
        slog::Logger::root(
            slog_async::Async::default(slog_term::term_full().fuse()).fuse(),
            o!(),
        )
    };

    let _guard = slog_scope::set_global_logger(log.clone());

    cfg_if! {
        if #[cfg(not(target_os = "android"))] {
            let arg = ::std::env::args().nth(1);
            slog_stdlog::init().expect("Could not setup log backend");
            match arg.as_ref().map(|s| &s[..]) {
                #[cfg(feature = "winit")]
                Some("--winit") => {
                    slog::info!(log, "Starting anvil with winit backend");
                    crate::winit::run_winit(log);
                }
                #[cfg(feature = "udev")]
                Some("--tty-udev") => {
                    slog::info!(log, "Starting anvil on a tty using udev");
                    crate::udev::run_udev(log);
                }
                #[cfg(feature = "x11")]
                Some("--x11") => {
                    slog::info!(log, "Starting anvil with x11 backend");
                    crate::x11::run_x11(log);
                }
                Some(other) => {
                    crit!(log, "Unknown backend: {}", other);
                }
                None => {
                    println!("USAGE: anvil --backend");
                    println!();
                    println!("Possible backends are:");
                    for b in POSSIBLE_BACKENDS {
                        println!("\t{}", b);
                    }
                }
            }
        } else {
            let android_context = ndk_context::android_context();
            let vm = unsafe { jni::JavaVM::from_raw(android_context.vm().cast()) }.unwrap();
            let env = vm.attach_current_thread().unwrap();
            let context = unsafe { Context::from_ptr(jni_glue::Env::from_ptr(env.get_native_interface()), android_context.context() as jni::sys::jobject).unwrap() };
            std::env::set_var("XDG_RUNTIME_DIR", context.getCacheDir().unwrap().unwrap().getCanonicalPath().unwrap().unwrap().to_string().unwrap());
            slog::info!(log, "Starting anvil with winit backend");
            crate::winit::run_winit(log);
        }
    }
}
