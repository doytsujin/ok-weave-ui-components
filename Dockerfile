FROM node:14-buster

# Avoid interactive prompts and set working directory
ENV DEBIAN_FRONTEND=noninteractive
ENV CI=true

# Set working directory
WORKDIR /workspace

# Use archived Debian repos to fix 404 errors and install Python 2 (some legacy tools may require it)
RUN sed -i 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g' /etc/apt/sources.list && \
    sed -i '/security.debian.org/d' /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    python2 \
    curl \
    ca-certificates \
    git && \
    ln -sf /usr/bin/python2 /usr/bin/python && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Optional: install any tools needed for build scripts or storybook
RUN corepack enable && corepack prepare yarn@1.22.21 --activate

# Avoid global babel: use project-local version instead
# You already have @babel/cli etc. as devDependencies

# Default command
CMD ["bash"]
