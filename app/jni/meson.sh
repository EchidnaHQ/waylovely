#/bin/bash

. ../shared.sh

meson _build --pkg-config-path="$PKG_CONFIG_PATH" \
    --cross-file ../meson-crossfiles/armv7.ini \
    --prefix=$PREFIX \
    -Dc_args="$INCLUDE_FLAGS" -Dcpp_args="$INCLUDE_FLAGS" -Dc_link_args="$LIB_FLAGS" -Dcpp_link_args="$LIB_FLAGS" "$@"