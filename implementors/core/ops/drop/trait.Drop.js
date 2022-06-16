(function() {var implementors = {};
implementors["calloop"] = [{"text":"impl&lt;'l, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"calloop/io/struct.Async.html\" title=\"struct calloop::io::Async\">Async</a>&lt;'l, F&gt;","synthetic":false,"types":["calloop::io::Async"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"calloop/channel/struct.Sender.html\" title=\"struct calloop::channel::Sender\">Sender</a>&lt;T&gt;","synthetic":false,"types":["calloop::sources::channel::Sender"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"calloop/signals/struct.Signals.html\" title=\"struct calloop::signals::Signals\">Signals</a>","synthetic":false,"types":["calloop::sources::signals::Signals"]}];
implementors["dbus"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"dbus/message/struct.Message.html\" title=\"struct dbus::message::Message\">Message</a>","synthetic":false,"types":["dbus::message::Message"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"dbus/ffidisp/struct.Connection.html\" title=\"struct dbus::ffidisp::Connection\">Connection</a>","synthetic":false,"types":["dbus::ffidisp::connection::Connection"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"dbus/struct.Error.html\" title=\"struct dbus::Error\">Error</a>","synthetic":false,"types":["dbus::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"dbus/channel/struct.Channel.html\" title=\"struct dbus::channel::Channel\">Channel</a>","synthetic":false,"types":["dbus::channel::ffichannel::Channel"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"dbus/arg/struct.OwnedFd.html\" title=\"struct dbus::arg::OwnedFd\">OwnedFd</a>","synthetic":false,"types":["dbus::arg::OwnedFd"]}];
implementors["drm"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"drm/control/dumbbuffer/struct.DumbMapping.html\" title=\"struct drm::control::dumbbuffer::DumbMapping\">DumbMapping</a>&lt;'a&gt;","synthetic":false,"types":["drm::control::dumbbuffer::DumbMapping"]}];
implementors["gbm"] = [{"text":"impl&lt;'a, T:&nbsp;'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"gbm/struct.MappedBufferObject.html\" title=\"struct gbm::MappedBufferObject\">MappedBufferObject</a>&lt;'a, T&gt;","synthetic":false,"types":["gbm::buffer_object::MappedBufferObject"]}];
implementors["input"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/struct.Libinput.html\" title=\"struct input::Libinput\">Libinput</a>","synthetic":false,"types":["input::context::Libinput"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/struct.DeviceGroup.html\" title=\"struct input::DeviceGroup\">DeviceGroup</a>","synthetic":false,"types":["input::device::DeviceGroup"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/struct.Device.html\" title=\"struct input::Device\">Device</a>","synthetic":false,"types":["input::device::Device"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/device/struct.DeviceAddedEvent.html\" title=\"struct input::event::device::DeviceAddedEvent\">DeviceAddedEvent</a>","synthetic":false,"types":["input::event::device::DeviceAddedEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/device/struct.DeviceRemovedEvent.html\" title=\"struct input::event::device::DeviceRemovedEvent\">DeviceRemovedEvent</a>","synthetic":false,"types":["input::event::device::DeviceRemovedEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/gesture/struct.GestureSwipeBeginEvent.html\" title=\"struct input::event::gesture::GestureSwipeBeginEvent\">GestureSwipeBeginEvent</a>","synthetic":false,"types":["input::event::gesture::GestureSwipeBeginEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/gesture/struct.GestureSwipeUpdateEvent.html\" title=\"struct input::event::gesture::GestureSwipeUpdateEvent\">GestureSwipeUpdateEvent</a>","synthetic":false,"types":["input::event::gesture::GestureSwipeUpdateEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/gesture/struct.GestureSwipeEndEvent.html\" title=\"struct input::event::gesture::GestureSwipeEndEvent\">GestureSwipeEndEvent</a>","synthetic":false,"types":["input::event::gesture::GestureSwipeEndEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/gesture/struct.GesturePinchBeginEvent.html\" title=\"struct input::event::gesture::GesturePinchBeginEvent\">GesturePinchBeginEvent</a>","synthetic":false,"types":["input::event::gesture::GesturePinchBeginEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/gesture/struct.GesturePinchUpdateEvent.html\" title=\"struct input::event::gesture::GesturePinchUpdateEvent\">GesturePinchUpdateEvent</a>","synthetic":false,"types":["input::event::gesture::GesturePinchUpdateEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/gesture/struct.GesturePinchEndEvent.html\" title=\"struct input::event::gesture::GesturePinchEndEvent\">GesturePinchEndEvent</a>","synthetic":false,"types":["input::event::gesture::GesturePinchEndEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/keyboard/struct.KeyboardKeyEvent.html\" title=\"struct input::event::keyboard::KeyboardKeyEvent\">KeyboardKeyEvent</a>","synthetic":false,"types":["input::event::keyboard::KeyboardKeyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/pointer/struct.PointerMotionEvent.html\" title=\"struct input::event::pointer::PointerMotionEvent\">PointerMotionEvent</a>","synthetic":false,"types":["input::event::pointer::PointerMotionEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/pointer/struct.PointerMotionAbsoluteEvent.html\" title=\"struct input::event::pointer::PointerMotionAbsoluteEvent\">PointerMotionAbsoluteEvent</a>","synthetic":false,"types":["input::event::pointer::PointerMotionAbsoluteEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/pointer/struct.PointerButtonEvent.html\" title=\"struct input::event::pointer::PointerButtonEvent\">PointerButtonEvent</a>","synthetic":false,"types":["input::event::pointer::PointerButtonEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/pointer/struct.PointerAxisEvent.html\" title=\"struct input::event::pointer::PointerAxisEvent\">PointerAxisEvent</a>","synthetic":false,"types":["input::event::pointer::PointerAxisEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/switch/struct.SwitchToggleEvent.html\" title=\"struct input::event::switch::SwitchToggleEvent\">SwitchToggleEvent</a>","synthetic":false,"types":["input::event::switch::SwitchToggleEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_pad/struct.TabletPadModeGroup.html\" title=\"struct input::event::tablet_pad::TabletPadModeGroup\">TabletPadModeGroup</a>","synthetic":false,"types":["input::event::tablet_pad::mode_group::TabletPadModeGroup"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_pad/struct.TabletPadButtonEvent.html\" title=\"struct input::event::tablet_pad::TabletPadButtonEvent\">TabletPadButtonEvent</a>","synthetic":false,"types":["input::event::tablet_pad::TabletPadButtonEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_pad/struct.TabletPadRingEvent.html\" title=\"struct input::event::tablet_pad::TabletPadRingEvent\">TabletPadRingEvent</a>","synthetic":false,"types":["input::event::tablet_pad::TabletPadRingEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_pad/struct.TabletPadStripEvent.html\" title=\"struct input::event::tablet_pad::TabletPadStripEvent\">TabletPadStripEvent</a>","synthetic":false,"types":["input::event::tablet_pad::TabletPadStripEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_tool/struct.TabletTool.html\" title=\"struct input::event::tablet_tool::TabletTool\">TabletTool</a>","synthetic":false,"types":["input::event::tablet_tool::tool::TabletTool"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_tool/struct.TabletToolAxisEvent.html\" title=\"struct input::event::tablet_tool::TabletToolAxisEvent\">TabletToolAxisEvent</a>","synthetic":false,"types":["input::event::tablet_tool::TabletToolAxisEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_tool/struct.TabletToolProximityEvent.html\" title=\"struct input::event::tablet_tool::TabletToolProximityEvent\">TabletToolProximityEvent</a>","synthetic":false,"types":["input::event::tablet_tool::TabletToolProximityEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_tool/struct.TabletToolTipEvent.html\" title=\"struct input::event::tablet_tool::TabletToolTipEvent\">TabletToolTipEvent</a>","synthetic":false,"types":["input::event::tablet_tool::TabletToolTipEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/tablet_tool/struct.TabletToolButtonEvent.html\" title=\"struct input::event::tablet_tool::TabletToolButtonEvent\">TabletToolButtonEvent</a>","synthetic":false,"types":["input::event::tablet_tool::TabletToolButtonEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/touch/struct.TouchDownEvent.html\" title=\"struct input::event::touch::TouchDownEvent\">TouchDownEvent</a>","synthetic":false,"types":["input::event::touch::TouchDownEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/touch/struct.TouchUpEvent.html\" title=\"struct input::event::touch::TouchUpEvent\">TouchUpEvent</a>","synthetic":false,"types":["input::event::touch::TouchUpEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/touch/struct.TouchMotionEvent.html\" title=\"struct input::event::touch::TouchMotionEvent\">TouchMotionEvent</a>","synthetic":false,"types":["input::event::touch::TouchMotionEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/touch/struct.TouchCancelEvent.html\" title=\"struct input::event::touch::TouchCancelEvent\">TouchCancelEvent</a>","synthetic":false,"types":["input::event::touch::TouchCancelEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/event/touch/struct.TouchFrameEvent.html\" title=\"struct input::event::touch::TouchFrameEvent\">TouchFrameEvent</a>","synthetic":false,"types":["input::event::touch::TouchFrameEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"input/struct.Seat.html\" title=\"struct input::Seat\">Seat</a>","synthetic":false,"types":["input::seat::Seat"]}];
implementors["nix"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"nix/dir/struct.Dir.html\" title=\"struct nix::dir::Dir\">Dir</a>","synthetic":false,"types":["nix::dir::Dir"]},{"text":"impl&lt;'d&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"nix/dir/struct.Iter.html\" title=\"struct nix::dir::Iter\">Iter</a>&lt;'d&gt;","synthetic":false,"types":["nix::dir::Iter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"nix/ifaddrs/struct.InterfaceAddressIterator.html\" title=\"struct nix::ifaddrs::InterfaceAddressIterator\">InterfaceAddressIterator</a>","synthetic":false,"types":["nix::ifaddrs::InterfaceAddressIterator"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"nix/net/if_/struct.Interfaces.html\" title=\"struct nix::net::if_::Interfaces\">Interfaces</a>","synthetic":false,"types":["nix::net::if_::if_nameindex::Interfaces"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"nix/pty/struct.PtyMaster.html\" title=\"struct nix::pty::PtyMaster\">PtyMaster</a>","synthetic":false,"types":["nix::pty::PtyMaster"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"nix/sys/aio/struct.AioCb.html\" title=\"struct nix::sys::aio::AioCb\">AioCb</a>&lt;'a&gt;","synthetic":false,"types":["nix::sys::aio::AioCb"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"nix/sys/signalfd/struct.SignalFd.html\" title=\"struct nix::sys::signalfd::SignalFd\">SignalFd</a>","synthetic":false,"types":["nix::sys::signalfd::SignalFd"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"nix/sys/timerfd/struct.TimerFd.html\" title=\"struct nix::sys::timerfd::TimerFd\">TimerFd</a>","synthetic":false,"types":["nix::sys::timerfd::TimerFd"]}];
implementors["slog"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"slog/struct.PushFnValueSerializer.html\" title=\"struct slog::PushFnValueSerializer\">PushFnValueSerializer</a>&lt;'a&gt;","synthetic":false,"types":["slog::PushFnValueSerializer"]}];
implementors["smithay"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/allocator/dumb/struct.DumbBuffer.html\" title=\"struct smithay::backend::allocator::dumb::DumbBuffer\">DumbBuffer</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::allocator::dumb::DumbBuffer"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"smithay/backend/allocator/trait.Buffer.html\" title=\"trait smithay::backend::allocator::Buffer\">Buffer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/allocator/struct.Slot.html\" title=\"struct smithay::backend::allocator::Slot\">Slot</a>&lt;B&gt;","synthetic":false,"types":["smithay::backend::allocator::swapchain::Slot"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/renderer/gles2/struct.Gles2Mapping.html\" title=\"struct smithay::backend::renderer::gles2::Gles2Mapping\">Gles2Mapping</a>","synthetic":false,"types":["smithay::backend::renderer::gles2::Gles2Mapping"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/renderer/gles2/struct.Gles2Renderer.html\" title=\"struct smithay::backend::renderer::gles2::Gles2Renderer\">Gles2Renderer</a>","synthetic":false,"types":["smithay::backend::renderer::gles2::Gles2Renderer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/egl/context/struct.EGLContext.html\" title=\"struct smithay::backend::egl::context::EGLContext\">EGLContext</a>","synthetic":false,"types":["smithay::backend::egl::context::EGLContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/egl/display/struct.EGLDisplayHandle.html\" title=\"struct smithay::backend::egl::display::EGLDisplayHandle\">EGLDisplayHandle</a>","synthetic":false,"types":["smithay::backend::egl::display::EGLDisplayHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/egl/surface/struct.EGLSurface.html\" title=\"struct smithay::backend::egl::surface::EGLSurface\">EGLSurface</a>","synthetic":false,"types":["smithay::backend::egl::surface::EGLSurface"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/egl/struct.EGLBuffer.html\" title=\"struct smithay::backend::egl::EGLBuffer\">EGLBuffer</a>","synthetic":false,"types":["smithay::backend::egl::EGLBuffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/session/direct/struct.DirectSession.html\" title=\"struct smithay::backend::session::direct::DirectSession\">DirectSession</a>","synthetic":false,"types":["smithay::backend::session::direct::DirectSession"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/session/logind/struct.LogindSessionNotifier.html\" title=\"struct smithay::backend::session::logind::LogindSessionNotifier\">LogindSessionNotifier</a>","synthetic":false,"types":["smithay::backend::session::dbus::logind::LogindSessionNotifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/desktop/space/struct.Space.html\" title=\"struct smithay::desktop::space::Space\">Space</a>","synthetic":false,"types":["smithay::desktop::space::Space"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/utils/x11rb/struct.X11Source.html\" title=\"struct smithay::utils::x11rb::X11Source\">X11Source</a>","synthetic":false,"types":["smithay::utils::x11rb::X11Source"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/utils/user_data/struct.UserData.html\" title=\"struct smithay::utils::user_data::UserData\">UserData</a>","synthetic":false,"types":["smithay::utils::user_data::UserData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/wayland/viewporter/struct.ViewporterState.html\" title=\"struct smithay::wayland::viewporter::ViewporterState\">ViewporterState</a>","synthetic":false,"types":["smithay::wayland::viewporter::ViewporterState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/xwayland/struct.XWayland.html\" title=\"struct smithay::xwayland::XWayland\">XWayland</a>","synthetic":false,"types":["smithay::xwayland::xserver::XWayland"]}];
implementors["udev"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"udev/struct.Device.html\" title=\"struct udev::Device\">Device</a>","synthetic":false,"types":["udev::device::Device"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"udev/struct.Enumerator.html\" title=\"struct udev::Enumerator\">Enumerator</a>","synthetic":false,"types":["udev::enumerator::Enumerator"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"udev/struct.MonitorBuilder.html\" title=\"struct udev::MonitorBuilder\">Builder</a>","synthetic":false,"types":["udev::monitor::Builder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"udev/struct.Udev.html\" title=\"struct udev::Udev\">Udev</a>","synthetic":false,"types":["udev::udev::Udev"]}];
implementors["wayland_server"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"wayland_server/socket/struct.ListeningSocket.html\" title=\"struct wayland_server::socket::ListeningSocket\">ListeningSocket</a>","synthetic":false,"types":["wayland_server::socket::ListeningSocket"]}];
implementors["winit"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"winit/window/struct.Window.html\" title=\"struct winit::window::Window\">Window</a>","synthetic":false,"types":["winit::window::Window"]}];
implementors["x11rb"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/utils/struct.RawFdContainer.html\" title=\"struct x11rb::utils::RawFdContainer\">RawFdContainer</a>","synthetic":false,"types":["x11rb::utils::raw_fd_container::RawFdContainer"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/cookie/struct.VoidCookie.html\" title=\"struct x11rb::cookie::VoidCookie\">VoidCookie</a>&lt;'_, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","synthetic":false,"types":["x11rb::cookie::VoidCookie"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/protocol/xproto/trait.ConnectionExt.html\" title=\"trait x11rb::protocol::xproto::ConnectionExt\">XProtoConnectionExt</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/wrapper/struct.GrabServer.html\" title=\"struct x11rb::wrapper::GrabServer\">GrabServer</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::wrapper::GrabServer"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/xproto/struct.PixmapWrapper.html\" title=\"struct x11rb::protocol::xproto::PixmapWrapper\">PixmapWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::xproto::PixmapWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/xproto/struct.WindowWrapper.html\" title=\"struct x11rb::protocol::xproto::WindowWrapper\">WindowWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::xproto::WindowWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/xproto/struct.FontWrapper.html\" title=\"struct x11rb::protocol::xproto::FontWrapper\">FontWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::xproto::FontWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/xproto/struct.GcontextWrapper.html\" title=\"struct x11rb::protocol::xproto::GcontextWrapper\">GcontextWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::xproto::GcontextWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/xproto/struct.ColormapWrapper.html\" title=\"struct x11rb::protocol::xproto::ColormapWrapper\">ColormapWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::xproto::ColormapWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/xproto/struct.CursorWrapper.html\" title=\"struct x11rb::protocol::xproto::CursorWrapper\">CursorWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::xproto::CursorWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/render/struct.PictureWrapper.html\" title=\"struct x11rb::protocol::render::PictureWrapper\">PictureWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::render::PictureWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/render/struct.GlyphsetWrapper.html\" title=\"struct x11rb::protocol::render::GlyphsetWrapper\">GlyphsetWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::render::GlyphsetWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/sync/struct.CounterWrapper.html\" title=\"struct x11rb::protocol::sync::CounterWrapper\">CounterWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::sync::CounterWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/sync/struct.AlarmWrapper.html\" title=\"struct x11rb::protocol::sync::AlarmWrapper\">AlarmWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::sync::AlarmWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/sync/struct.FenceWrapper.html\" title=\"struct x11rb::protocol::sync::FenceWrapper\">FenceWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::sync::FenceWrapper"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"x11rb/connection/trait.RequestConnection.html\" title=\"trait x11rb::connection::RequestConnection\">RequestConnection</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"x11rb/protocol/xfixes/struct.RegionWrapper.html\" title=\"struct x11rb::protocol::xfixes::RegionWrapper\">RegionWrapper</a>&lt;'_, C&gt;","synthetic":false,"types":["x11rb::protocol::xfixes::RegionWrapper"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()