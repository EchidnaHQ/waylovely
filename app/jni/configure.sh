#!/bin/sh

# Copied from https://gist.github.com/nddrylliog/4688209

export ANDROID_SDK=$HOME/Android/Sdk

# Don't forget to adjust this to your NDK path
export ANDROID_NDK=${ANDROID_SDK}/ndk/23.2.8568313

export CROSS_COMPILE=armv7a-linux-androideabi
TOOLCHAIN=${ANDROID_NDK}/toolchains/llvm/prebuilt/linux-x86_64
# use the clang compiler
export ANDROID_PREFIX=${TOOLCHAIN}/bin

export SYSROOT=${TOOLCHAIN}/sysroot

# Non-exhaustive lists of compiler + binutils
# Depending on what you compile, you might need more binutils than that
#export CPP=$ANDROID_PREFIX/${CROSS_COMPILE}29-clang
export AR=$ANDROID_PREFIX/llvm-ar
export AS=$ANDROID_PREFIX/llvm-as
export NM=$ANDROID_PREFIX/llvm-nm
export CC=$ANDROID_PREFIX/${CROSS_COMPILE}29-clang
export CXX=$ANDROID_PREFIX/${CROSS_COMPILE}29-clang++
export LD=$ANDROID_PREFIX/ld
export RANLIB=$ANDROID_PREFIX/llvm-ranlib

export PREFIX="${PACKAGES_FOLDER}/${PWD##*/}"

. ../shared.sh

# You can clone the full Android sources to get bionic if you want.. I didn't
# want to so I just got linker.h from here: http://gitorious.org/0xdroid/bionic
# Note that this was only required to build boehm-gc with dynamic linking support.
export CFLAGS="${CFLAGS} --sysroot=${SYSROOT} -I${SYSROOT}/usr/include"
export CPPFLAGS="${CFLAGS}"
export LDFLAGS="${LDFLAGS} -L$SYSROOT/usr/lib/"

./configure CC=$ANDROID_PREFIX/${CROSS_COMPILE}29-clang CXX=$ANDROID_PREFIX/${CROSS_COMPILE}29-clang++ --host=${CROSS_COMPILE} --target=${CROSS_COMPILE} --with-sysroot=${SYSROOT} --prefix=${PREFIX} "$@"
