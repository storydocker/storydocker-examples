# Vue 3 + TS + Vite + StoryDocker

## Initial app setup

This app directory was initially auto-generated with [Vite's scaffolding tool](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) for npm:

`npm create vite@latest`

The Storybook directory (`./.storybook`) and it's contents, along with the storybook files (`./src/stories`), were generated with [Storybook's cli tool](https://storybook.js.org/docs/vue/get-started/install)

`npx storybook init`

_not included_: any Storybook dependencies added via `npx storybook init`. The only dependencies are what was installed via `npm create vite`

## Adding Storybook development with StoryDocker

### How to start the StoryDocker container

1. run `npm install` to add all depenencies
2. run `docker compose up` to run the docker container
3. view storybook site at `localhost:6006`

### What are the docker files that were added?

This directory contains two docker files:

**`Dockerfile`**

The `Dockerfile` will generate a docker image with StoryDocker as the base layer, adding this app into an internal-to-StoryDocker-directory at `workspaces/application`. Where there are conflicts, the app's depenencies will be separately installed at `workspaces/application/node_modules`.

**`docker-compose.yml`**

The `docker-compose.yml` file is a configuration file for [Docker's `compose` CLI](https://docs.docker.com/engine/reference/commandline/compose/). 

