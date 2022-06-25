#/bin/bash

. ../shared.sh

cmake -DCMAKE_TOOLCHAIN_FILE=$(readlink -f ~/Android/Sdk/ndk/23.2.8568313/build/cmake/android.toolchain.cmake) -DANDROID_ABI=$ABI -DANDROID_PLATFORM=android-29 --install-prefix=$PREFIX "$@"