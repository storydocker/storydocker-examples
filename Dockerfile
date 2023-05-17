FROM ghcr.io/storydocker/storydocker:main

WORKDIR /usr/src/app

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL verbose

COPY ./examples ./workspaces/
RUN rm -rf ./workspaces/astro-framework-multiple
RUN npm i && npm cache clean --force

# Make storybook port available externally
EXPOSE 6001-6012
EXPOSE 2002

# run storybook app
CMD ["npm", "run", "storybook"]
