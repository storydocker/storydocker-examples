# React app created with Vite

* React 18
* Vanilla Javascript
* Vite builder

## Steps to create this repo

1. generate React w/Vite app with `npm create vite@latest`
2. added a Dockerfile to the root of this directory with `FROM ghcr.io/storydocker/storydocker:main` (see `./Dockerfile`)
3. added three npm scripts to package.json
    ```
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
    ```
4. added a .storybook directory config (see contents of `./.storybook`)
5. added the `docker-compose.yml` file to the root of this directory (see contents of `./docker-compose.yml`)
6. add at least one story file in a `.stories` directory (see `./src/stories/App.stories.ts`)
7. run `docker compose up` in the root