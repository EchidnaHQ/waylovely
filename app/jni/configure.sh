#/bin/bash

. "$(dirname $0)/../other.sh"
./configure  --host=${CROSS_COMPILE} --target=${CROSS_COMPILE} --with-sysroot=${SYSROOT} --prefix=${PREFIX} "$@"
