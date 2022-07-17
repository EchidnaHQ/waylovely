# 💕 Waylovely 💕
A lovely attempt at running the [Anvil](https://github.com/Smithay/smithay) compositor for Wayland in Android.

This attempt is not yet complete thoo, but it's theoritically posbbile! Winit itself has an Android support, though I'm not sure whether it'll run nicely or not! ^^ We'll investigate and make the patches if we can. <3

## Xdg Desktop Portal implementation for Android
This project also contains an implementation for Xdg Desktop Portal for Android. This allows softwares that already use existing Linux APIs to call Android APIs trough the Portals' abstractions!

But, this is not also yet complete!  

## Other

Also, the original README for Smithay is available at [`compositor/README-smithay.md`](./compositor/README-smithay.md)

The packages in `kawaii-deps` and our fork of Smithay and Anvil are licensed under their original license, along with patches we have on them! The build scripts and the source Xdg Portal implementation for Android are licensed under the LGPLv2.1 or later!