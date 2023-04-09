# StoryDocker examples

These are examples of Vite-built app environments which can create Storybook UI prototyping & development environments using [StoryDocker](https://github.com/storydocker/storydocker) and Docker and `docker compose`

As is, you should be able to take any `meow`-vite directory, run `docker compose up` within it, and that will add the app's contents to a docker container, run the container, and run Storybook within the container, making the running Storybook app available to view in a browser.

As you change your local files, they should _automatically be changed in the Docker container_.

## Steps used to create each of the `meow`-vite repos/directories

1. generate an application with Vite as a builder using `npm create vite@latest` by following steps to make an app environment to your taste
2. add a `Dockerfile` to the root of your app's directory starting with `FROM ghcr.io/storydocker/storydocker:main` (see the `./Dockerfile` in any of the `meow`-vite directories)
3. add two npm scripts to package.json
    ```
    "storybook": "storybook dev -p ${SB_PORT:-6006}",
    "build-storybook": "storybook build"
    ```
    * _note_ the `port` may be configued by the `SB_PORT` variable, but defaults to `6006`
4. add a `.storybook` directory with `preview` and `main` config files (see example contents of `./.storybook` in any of the `meow`-vite directories)
   * these examples come from Storybook's default setup for the given framework, with some additions to add functionality 
5. add the `docker-compose.yml` file to the root of this directory (see contents of `./docker-compose.yml` in any of the `meow`-vite directories)
6. add at least one story file in the `src` directory (see any `./src/stories` directories)
   * `src/stories/` examples come from Storybook's default setup for the given framework
7. run `docker compose up` in the root
8. View the site at `localhost:6006`

## How to build the storybook static site

### In the running container

If you want to build inside the running container, you'll need to `docker exec` into the container after you have determined the container ID

1. Get ID either in the Docker desktop or by running:
    `docker ps -q --no-trunc -l`
    which will output just the docker container ID, something like:
    `987654321aLongStringOfNumbersAndLetters123456789`
2. Enter the container to a command prompt where you may run commands:
    `docker exec -it THE_ID_OF_YOUR_CONTAINER /bin/sh`
   which will bring you to a terminal inside the docker container:
    `/usr/src/app #` <- ready for your command
3. Build your Storybook static site by running:
    `npm run build-storybook`
4. This will build your Storybook static site which will be available **in your local app directory** at:
    `<YOUR_APP_ROOT>/storybook-static`

### Using docker compose

You can change the last `command` line in `docker-compose.yml` to be:
    `command: npm run build-storybook`
And run `docker compose up` and it will build your storybook static site and copy it to your local app directory
