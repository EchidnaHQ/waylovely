#/bin/bash

. "$(dirname $0)/shared.sh"

cmake -DCMAKE_TOOLCHAIN_FILE=$(readlink -f $ANDROID_NDK_PATH/build/cmake/android.toolchain.cmake) -DANDROID_ABI=$ABI -DANDROID_PLATFORM=android-29 --install-prefix=$PREFIX "$@"