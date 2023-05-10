# StoryDocker examples

Auto-generated application environments for testing Storybook and StoryDocker

These are examples of Vite-built app environments which can create Storybook UI prototyping & development environments using [StoryDocker](https://github.com/storydocker/storydocker) and Docker and `docker compose`

As is, you should be able to take any `./examples/vite-*` directory, run `docker compose up` within it, and that will add the app's contents to a docker container, run the container, and run Storybook within the container, making the running Storybook app available to view in a browser.

Your local files will sync with the container, so you can edit your local files and see the changes in the running Storybook app.

## Running the multi-framework example

### Local

1. clone this repo
2. run `npm ci` to install dependencies
3. run `npm run local` to see all the examples running locally inside a single Storybook

### Docker

1. clone this repo
2. run `docker compose up` to see all the examples running inside a single Storybook

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
