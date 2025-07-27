# UI Component Build & Deployment: Makefile + Docker

This guide describes how to use the provided `Makefile` and Dockerfiles to build, test, and serve the `weaveworks-ui-components` project in a clean and reproducible way.

---

## Prerequisites

* Podman or Docker installed (`podman` preferred)
* Git + GNU Make

---

## Project Structure

```
├── Dockerfile                # Build container for development and CI
├── Dockerfile.static        # NGINX container for serving built assets
├── Makefile                 # Task runner
├── out/                     # All build outputs
├── package.json             # Yarn scripts
└── webpack.config.js        # Webpack for docs
```

---

## Build Container Image

```sh
make image
```

Builds the development container `ok-ui-components-builder` using `Dockerfile`.

---

## Install Dependencies

```sh
make install
```

Installs all project dependencies inside the container (`node_modules` will be created locally).

---

## Build Project

```sh
make build
```

Runs the full build pipeline into `out/` (Babel, Webpack, etc).

---

## Run Any Script

```sh
make run SCRIPT=<script> [ENV="KEY=val ..."]
```

Examples:

```sh
make run SCRIPT=start
make run SCRIPT=docs:build ENV="RELEASE=1 NODE_ENV=production"
make run SCRIPT=docs:analyze ENV="ANALYZE_BUNDLE=true"
```

This runs `yarn run <script>` inside the container.

---

## Storybook

```sh
make storybook
```

Runs Storybook inside the container (binds port 6006).

---

## Example of complete build

```sh
make image
make install
make run SCRIPT=build
make run SCRIPT=docs:build ENV="RELEASE=1"
make storybook
```

---

## Package and Export

```sh
make pack        # Runs npm pack to generate .tgz
make export      # Copies out/ to ../ok-scope/ui-components/
```

---

## Clean, Fix & Prepare

```sh
make clean       # Removes node_modules, out/, locks
make fix-perms   # Fixes local file permissions
make mods-dir    # Creates clean node_modules dir with UID:GID
make logs-dir    # Creates build logs dir (logs/)
```

---

## Serve Built Assets via NGINX

```sh
make static-image    # Builds Dockerfile.static into ok-ui-components-static
make static-serve    # Serves out/ over port 8080
```

---

## Notes

* `out/` is the **only** build output directory
* `ENV` defaults to `NODE_ENV=development` unless overridden
* All `yarn` scripts can be run via `make run SCRIPT=...`
* Avoid modifying dependencies manually — use `make bootstrap` or `yarn` scripts

---

For questions or issues, refer to the `Makefile` and `package.json` or ask the maintainer.
