#/bin/sh

. "$(dirname $0)/shared.sh"

export CARGO_TARGET_AARCH64_LINUX_ANDROID_LINKER=$LD

cargo build --target $ABI_FULL "$@"