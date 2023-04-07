# StoryDocker examples

These are examples of Vite-built app environments which can create Storybook UI prototyping & development environments using [StoryDocker](https://github.com/storydocker/storydocker) and Docker and `docker compose`

As is, you should be able to take a [meow]-vite directory, run `docker compose up` in it, and it will add the app's contents to a docker container, run the container, and run Storybook within the container. 

As you change your local files, they should _automatically be changed in the Docker container_.

## Steps to create one of the [meow]-vite repos/directories

1. generate React w/Vite app with `npm create vite@latest`, follow steps to make an app environment to your taste
2. add a `Dockerfile` to the root of your app's directory starting with `FROM ghcr.io/storydocker/storydocker:main` (see the `./Dockerfile` in any of the [meow]-vite directories)
3. add two npm scripts to package.json
    ```
    "storybook": "storybook    dev -p 6006",
    "build-storybook": "storybook build"
    ```
4. add a `.storybook` directory with `preview` and `main` config files (see example contents of `./.storybook` in any of the [meow]-vite directories)
   * examples come from Storybook's default setup for the given framework, with some additions to add functionality 
5. add the `docker-compose.yml` file to the root of this directory (see contents of `./docker-compose.yml` in any of the [meow]-vite directories)
6. add at least one story file in the `src` directory (see any `./src/stories` directories)
   * `src/stories/` examples come from Storybook's default setup for the given framework
7. run `docker compose up` in the root
8. View the site at `localhost:6006`