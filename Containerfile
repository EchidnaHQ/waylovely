FROM archlinux/archlinux:latest
ENV NAME=waylovely-toolbox VERSION=rolling
VOLUME /var/cache/pacman/pkg/
LABEL com.github.containers.toolbox="true" \
  name="$NAME" \
  version="$VERSION"
RUN pacman -Syu --noconfirm \
  && pacman -S sudo pacman-contrib rust --noconfirm \
  && pacman -S $(sed 1d<<<$(pactree -sld 1 weston)) --no-confirm \
  && echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/toolbox
CMD ["bash"]
