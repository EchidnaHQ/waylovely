export PACKAGES_FOLDER=$(readlink -f "../../libs/$ABI_FULL/")
# Don't mix up .pc files from your host and build target
export PKGCONFIG_DIRS=$(find $PACKAGES_FOLDER -wholename "**/pkgconfig" -print0 | xargs -0)
export PKG_CONFIG_PATH=${PKGCONFIG_DIRS// /:}
export PROJECT_NAME=${PWD##*/}
export PREFIX=$(readlink -f "../../libs/$ABI_FULL/$PROJECT_NAME")
#export INCLUDE_DIRS=$(find $PACKAGES_FOLDER -wholename "**/include" -print0 | xargs -0)
#export INCLUDE_FLAGS=-I${INCLUDE_DIRS// / -I}

#export LIB_DIRS=$(find $PACKAGES_FOLDER -wholename "**/lib" -print0 | xargs -0)
#export LIB_FLAGS=-L${LIB_DIRS// / -L}
