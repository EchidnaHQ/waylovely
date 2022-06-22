# 💕 Waylovely 💕
A lovely attempt at running the [Anvil](https://github.com/Smithay/smithay) compositor for Wayland in Android.

This attempt is not yet complete thoo!! The patches here just removes the Cargo features for the desktop-only APIs, so it can only be run as a Winit application, which actually works in Android!

That's why it's theoritically possible to have this running in Android, though I'm not sure whether it'll run nicely or not. We'll investigate and make the patches if we can. <3

Also, the original README is available at [`README-smithay.md`](./README-smithay.md)

## Getting your environment ready
I use Toolbox for this project, to get started, create a Fedora 36-based container in Toolbox and run: 
```sh
sudo dnf install libxkbcommon-devel weston-devel xorg-x11-server-Xwayland
```
Voilaa!! you can now run `cargo run` inside of the [`anvil`](./anvil) directory inside of your new containerr! <3

And then we will have to get it working inside of an Android system! Perhaps we can bundle Fedora36 container images with the library eventually!
