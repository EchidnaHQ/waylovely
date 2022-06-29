# 💕 Waylovely 💕
A lovely attempt at running the [Anvil](https://github.com/Smithay/smithay) compositor for Wayland in Android.

This attempt is not yet complete thoo, but it's theoritically posbbile! Winit itself has an Android support, though I'm not sure whether it'll run nicely or not! ^^ We'll investigate and make the patches if we can. <3

## Xdg Desktop Portal implementation for Android
This project also contains an implementation for Xdg Desktop Portal for Android. This allows softwares that already use existing Linux APIs to call Android APIs trough the Portals' abstractions!

But, this is not also yet complete!  

## Let's help me hack this!
To get started, let's do some things first:

- You'll need to get a copy of the SDK trough either Android Studio or Sdk Manager. The minimal SDK version is API 29 ^^
- For the NDK, I use the `23.2.8568313` version of the NDK ^^
- Since Waylovely depends on many C/C++ libraries, we'll need the build systems for those libraries too!
    - They are Meson, Cmake, and Autotools/GNU Make! 
- Then install the Rust toolchain for your target platform with [Rustup](https://rustup.rs/).
```sh
rustup target add armv7-linux-androideabi   # for arm
rustup target add i686-linux-android        # for x86
rustup target add aarch64-linux-android     # for arm64
rustup target add x86_64-linux-android      # for x86_64
rustup target add x86_64-unknown-linux-gnu  # for linux-x86-64
rustup target add x86_64-apple-darwin       # for darwin x86_64 (if you have an Intel MacOS)
rustup target add aarch64-apple-darwin      # for darwin arm64 (if you have a M1 MacOS)
rustup target add x86_64-pc-windows-gnu     # for win32-x86-64-gnu
rustup target add x86_64-pc-windows-msvc    # for win32-x86-64-msvc
...
```
- Then you'll need to install the [`cargo-apk`](https://crates.io/crates/cargo-apk) utility. It'll get installed to `~/.cargo/bin`, so please make sure it's loaded in your `PATH`.
```
$ cargo install cargo-apk
```

### Native library dependencies
To compile a native library for use as a dependency, add the Git repo as a submodule to `app/jni`. Then, there are some scripts in the `app/jni` folder! Instead of running let's say, 'meson _build', run the corresponding script like this in the root directory of the package's source!

```sh
../meson.sh -Ddocumentation=false \ # Pass your Meson arguments to the script!
            -Dc_link_args="-v" # It'll pass it to Meson!
```
Then run the command to compile the package! It'll get installed to `app/libs/$ANDROID_ABI/$PACKAGE_NAME` ^^

For Meson packages, please set the NDK path in `app/jni/meson-crossfiles/aarch64.ini` to your location. 😊

If you want to save the arguments you pass to the build system, feel free to save it as a script with the name of `simple-build.sh`. For some packages, they're already there with my configurations! 

The native library will build to the ABI set in the `ANDROID_ABI` environment variable, or `arm64-v8a` if not set. but you can change. For the package name, the script will use the basename of the current working directory ^^


### Building Waylovely  itself ^^
For the actual Waylovely itself, run this lovely command inside of `compositor/anvil` after installing all the dependencies!
```sh
$ cargo apk build
```

## Other

Also, the original README for Smithay is available at [`compositor/README-smithay.md`](./compositor/README-smithay.md)

The packages in `app/jni` and our fork of Smithay and Anvil are licensed under their original license, along with patches we have on them! The build scripts and the source Xdg Portal implementation for Android are licensed under the MPLv2!