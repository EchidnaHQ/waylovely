(function() {var implementors = {};
implementors["smithay"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"smithay/backend/drm/atomic/struct.AtomicDrmSurface.html\" title=\"struct smithay::backend::drm::atomic::AtomicDrmSurface\">AtomicDrmSurface</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::atomic::surface::AtomicDrmSurface"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"smithay/backend/drm/atomic/struct.AtomicDrmDevice.html\" title=\"struct smithay::backend::drm::atomic::AtomicDrmDevice\">AtomicDrmDevice</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::atomic::AtomicDrmDevice"]},{"text":"impl&lt;D1:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a>, D2:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"enum\" href=\"smithay/backend/drm/common/fallback/enum.FallbackDevice.html\" title=\"enum smithay::backend::drm::common::fallback::FallbackDevice\">FallbackDevice</a>&lt;D1, D2&gt;","synthetic":false,"types":["smithay::backend::drm::common::fallback::FallbackDevice"]},{"text":"impl&lt;S1:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.Surface.html\" title=\"trait smithay::backend::drm::Surface\">Surface</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a>, S2:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.Surface.html\" title=\"trait smithay::backend::drm::Surface\">Surface</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"enum\" href=\"smithay/backend/drm/common/fallback/enum.FallbackSurface.html\" title=\"enum smithay::backend::drm::common::fallback::FallbackSurface\">FallbackSurface</a>&lt;S1, S2&gt;","synthetic":false,"types":["smithay::backend::drm::common::fallback::FallbackSurface"]},{"text":"impl&lt;B, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"smithay/backend/drm/egl/struct.EglDevice.html\" title=\"struct smithay::backend::drm::egl::EglDevice\">EglDevice</a>&lt;B, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"smithay/backend/egl/native/trait.Backend.html\" title=\"trait smithay::backend::egl::native::Backend\">Backend</a>&lt;Surface = &lt;D as <a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a>&gt;::<a class=\"type\" href=\"smithay/backend/drm/trait.Device.html#associatedtype.Surface\" title=\"type smithay::backend::drm::Device::Surface\">Surface</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a> + <a class=\"trait\" href=\"smithay/backend/egl/native/trait.NativeDisplay.html\" title=\"trait smithay::backend::egl::native::NativeDisplay\">NativeDisplay</a>&lt;B, Arguments = Handle&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as <a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a>&gt;::<a class=\"type\" href=\"smithay/backend/drm/trait.Device.html#associatedtype.Surface\" title=\"type smithay::backend::drm::Device::Surface\">Surface</a>: <a class=\"trait\" href=\"smithay/backend/egl/native/trait.NativeSurface.html\" title=\"trait smithay::backend::egl::native::NativeSurface\">NativeSurface</a>,&nbsp;</span>","synthetic":false,"types":["smithay::backend::drm::egl::EglDevice"]},{"text":"impl&lt;D:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.RawDevice.html\" title=\"trait smithay::backend::drm::RawDevice\">RawDevice</a> + ControlDevice + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"smithay/backend/drm/gbm/struct.GbmDevice.html\" title=\"struct smithay::backend::drm::gbm::GbmDevice\">GbmDevice</a>&lt;D&gt;","synthetic":false,"types":["smithay::backend::drm::gbm::GbmDevice"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"smithay/backend/drm/legacy/struct.LegacyDrmSurface.html\" title=\"struct smithay::backend::drm::legacy::LegacyDrmSurface\">LegacyDrmSurface</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::legacy::surface::LegacyDrmSurface"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"smithay/backend/drm/legacy/struct.LegacyDrmDevice.html\" title=\"struct smithay::backend::drm::legacy::LegacyDrmDevice\">LegacyDrmDevice</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::legacy::LegacyDrmDevice"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"smithay/backend/libinput/struct.LibinputInputBackend.html\" title=\"struct smithay::backend::libinput::LibinputInputBackend\">LibinputInputBackend</a>","synthetic":false,"types":["smithay::backend::libinput::LibinputInputBackend"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"smithay/backend/udev/trait.UdevHandler.html\" title=\"trait smithay::backend::udev::UdevHandler\">UdevHandler</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"smithay/backend/udev/struct.UdevBackend.html\" title=\"struct smithay::backend::udev::UdevBackend\">UdevBackend</a>&lt;T&gt;","synthetic":false,"types":["smithay::backend::udev::UdevBackend"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()