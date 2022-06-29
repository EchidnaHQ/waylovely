#/bin/bash
. "$(dirname $0)/shared.sh"
. "$(dirname $0)/other.sh"
echo $PREFIX
./configure  --host=${ABI_FULL} --target=${ABI_FULL} --with-sysroot=${SYSROOT} --prefix=${PREFIX} "$@"
