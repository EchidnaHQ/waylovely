#/bin/sh

export CMAKE_LIBRARY_PATH=$CMAKE_LIBRARY_PATH:$(readlink -f ../../libs/expat)

cmake -DCMAKE_TOOLCHAIN_FILE=$(readlink -f ~/Android/Sdk/ndk/23.2.8568313/build/cmake/android.toolchain.cmake) -DANDROID_ABI=x86_64 -DANDROID_PLATFORM=android-29 --install-prefix=$INSTALL_PREFIX