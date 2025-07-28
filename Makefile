# Project and Container Settings
WORKDIR := /workspace
SRC := $(CURDIR)
IMAGE := ok-ui-components-builder
STATIC_IMAGE := ok-ui-components-static

UID := $(shell id -u)
GID := $(shell id -g)

DOCKER_RUN := podman run -it \
	--volume "$(SRC)/:$(WORKDIR):Z" \
	-w "$(WORKDIR)" \
	-u root \
	--rm --name $(IMAGE)

ENV ?= NODE_ENV=development

.PHONY: help image install build clean shell storybook pack export fix-perms mods-dir logs-dir static-image static-serve run bootstrap

help:
	@echo "Makefile commands:"
	@echo "  make image                    - Build the builder container image ($(IMAGE))"
	@echo "  make install                  - Run 'yarn install' in container (creates node_modules, lockfile locally)"
	@echo "  make build                    - Run full build into ./dist"
	@echo "  make run SCRIPT=X [ENV=...]  - Run package.json script with optional env vars (default ENV=NODE_ENV=development)"
	@echo "  make clean                    - Remove node_modules, dist/, and lockfile"
	@echo "  make shell                    - Start interactive shell inside container"
	@echo "  make storybook                - Run Storybook inside container (port 6006)"
	@echo "  make pack                     - Pack the component as .tgz (npm pack)"
	@echo "  make export                   - Copy dist/* to ../ok-scope/ui-components/"
	@echo "  make fix-perms                - Fix permissions in the source directory"
	@echo "  make mods-dir                 - Create node_modules directory"
	@echo "  make logs-dir                 - Create logs directory for npm build"
	@echo "  make static-image             - Build NGINX static site image from ./dist"
	@echo "  make static-serve             - Serve ./dist with built static image on port 8080"
	@echo ""
	@echo "Examples:"
	@echo "  make run SCRIPT=build"
	@echo "  make run SCRIPT=docs:build ENV=\"RELEASE=1 NODE_ENV=production\""
	@echo "  make run SCRIPT=docs:analyze ENV=\"ANALYZE_BUNDLE=true\""
	@echo "  make run SCRIPT=start"
	@echo "  make storybook"

image:
	podman build -t $(IMAGE) .

install:
	$(DOCKER_RUN) $(IMAGE) sh -c "yarn install --legacy-peer-deps"

build:
	$(MAKE) run SCRIPT=build

run:
	$(DOCKER_RUN) $(IMAGE) sh -c "$(ENV) yarn install --legacy-peer-deps && $(ENV) yarn run $(SCRIPT)"

serve:
	$(DOCKER_RUN) \
		-p 3000:3000 \
		--name $(IMAGE) \
		$(IMAGE) sh -c "yarn run start-npx"

clean:
	sudo rm -Rfv logs node_modules dist package-lock.json yarn.lock out

shell:
	$(DOCKER_RUN) -it $(IMAGE) sh

storybook:
	$(MAKE) run SCRIPT=storybook

pack:
	$(DOCKER_RUN) $(IMAGE) sh -c "yarn install --legacy-peer-deps && npm pack"

export:
	@mkdir -p ../ok-scope/ui-components/
	cp -r dist/* ../ok-scope/ui-components/
	@echo "Exported dist/ to ../ok-scope/ui-components/"

fix-perms:
	sudo chown -R $(UID):$(GID) $(SRC)

mods-dir:
	sudo rm -Rfv node_modules
	sudo mkdir -pv node_modules
	sudo chown -Rfv $(UID):$(GID) node_modules

logs-dir:
	sudo rm -Rfv logs
	sudo mkdir -pv logs/{npm,npm-cache}
	sudo chown -Rfv $(UID):$(GID) logs

static-image:
	podman build -f Dockerfile.static -t $(STATIC_IMAGE) .

static-serve:
	podman run --rm -it -p 8080:80 $(STATIC_IMAGE)

bootstrap:
	$(DOCKER_RUN) $(IMAGE) sh -c "yarn bootstrap"
