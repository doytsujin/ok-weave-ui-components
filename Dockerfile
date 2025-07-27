FROM node:14-buster

# Avoid interactive prompts and set working directory
ENV DEBIAN_FRONTEND=noninteractive
ENV CI=true

# Working directory
WORKDIR /workspace

# Switch to Debian archive URLs and install Python 2
RUN sed -i 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g' /etc/apt/sources.list && \
    sed -i '/security.debian.org/d' /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    python2 \
    curl \
    ca-certificates && \
    ln -sf /usr/bin/python2 /usr/bin/python && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Babel globally
RUN npm install -g @babel/cli @babel/core
RUN npm install -g @babel/cli @babel/core @babel/preset-env

# Default command
CMD ["bash"]
