#/bin/sh
. "$(dirname $0)/shared.sh"

export LIB_DIRS=$(find $PACKAGES_FOLDER -wholename "**/lib" -print0 | xargs -0)
export LD_LINK_ARGS=-L${LIB_DIRS// / -L}

echo $LIB_DIRS

cargo apk build