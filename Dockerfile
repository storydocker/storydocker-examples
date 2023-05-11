FROM ghcr.io/storydocker/storydocker:main@sha256:f47132896a7323b305aa62f0c8c150fac1148a98a4b206a3d9c42ae6249f975c

WORKDIR /usr/src/app

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL verbose

COPY ./examples ./workspaces/
RUN npm i && npm cache clean --force

# Make storybook port available externally
EXPOSE 6001-6010
EXPOSE 2002

# run storybook app
CMD ["npm", "run", "storybook"]
