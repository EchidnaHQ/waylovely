#!/bin/sh

# Copied from https://gist.github.com/nddrylliog/4688209



# Non-exhaustive lists of compiler + binutils
# Depending on what you compile, you might need more binutils than that
#export CPP=$ANDROID_PREFIX/bin/${ABI_FULL}29-clang
export AR=$ANDROID_PREFIX/bin/llvm-ar
export AS=$ANDROID_PREFIX/bin/llvm-as
export NM=$ANDROID_PREFIX/bin/llvm-nm
export CC=$ANDROID_PREFIX/bin/${ABI_FULL}29-clang
export CXX=$ANDROID_PREFIX/bin/${ABI_FULL}29-clang++
export LD=$ANDROID_PREFIX/bin/ld
export RANLIB=$ANDROID_PREFIX/bin/llvm-ranlib

# You can clone the full Android sources to get bionic if you want.. I didn't
# want to so I just got linker.h from here: http://gitorious.org/0xdroid/bionic
# Note that this was only required to build boehm-gc with dynamic linking support.
export CFLAGS="${CFLAGS} --sysroot=${PKG_CONFIG_SYSROOT_DIR} -I${PKG_CONFIG_SYSROOT_DIR}/usr/include"
export CPPFLAGS="${CFLAGS}"
export LDFLAGS="${LDFLAGS} -L$PKG_CONFIG_SYSROOT_DIR/usr/lib/"
