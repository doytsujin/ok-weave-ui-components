# Project and Container Settings
WORKDIR := /workspace
SRC := $(CURDIR)
IMAGE := ok-ui-components-builder
STATIC_IMAGE := ok-ui-components-static

UID := $(shell id -u)
GID := $(shell id -g)

#	-u $(UID):$(GID) 
DOCKER_RUN := podman run -it \
	--volume "$(SRC)/:$(WORKDIR):Z" \
	-w "$(WORKDIR)" \
	-u root \
	--rm --name $(IMAGE) \

.PHONY: help image install build clean shell storybook pack export fix-perms mods-dir logs-dir static-image static-serve

help:
	@echo "Makefile commands:"
	@echo "  make image       - Build the builder container image ($(IMAGE))"
	@echo "  make install     - Run 'npm install' in container (creates node_modules, lockfile locally)"
	@echo "  make build       - Run babel build into ./dist"
	@echo "  make clean       - Remove node_modules, dist, and lockfile"
	@echo "  make shell       - Start interactive shell inside container"
	@echo "  make storybook   - Run Storybook inside container (port 6006)"
	@echo "  make pack        - Pack the component as .tgz (npm pack)"
	@echo "  make export      - Copy dist/* to ../ok-scope/ui-components/"
	@echo "  make fix-perms   - Fix permissions in the source directory"
	@echo "  make mods-dir    - Create node_modules directory"
	@echo "  make logs-dir    - Create logs directory for npm build"

image:
	podman build -t $(IMAGE) .

install:
	$(DOCKER_RUN) $(IMAGE) sh -c "npm install --legacy-peer-deps"

build:
	$(DOCKER_RUN) $(IMAGE) sh -c "npm install --legacy-peer-deps && babel src --out-dir dist --ignore '**/*.test.js'"

clean:
	sudo rm -Rfv logs node_modules dist package-lock.json

shell:
	$(DOCKER_RUN) -it $(IMAGE) sh

storybook:
	podman run --rm -it \
		-p 6006:6006 \
		--volume "$(SRC)/:$(WORKDIR):Z" \
		-w "$(WORKDIR)" \
		-u root \
		--name $(IMAGE) \
		$(IMAGE) sh -c "npm install --legacy-peer-deps && npm run storybook"

pack:
	$(DOCKER_RUN) $(IMAGE) sh -c "npm install --legacy-peer-deps && npm pack"

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