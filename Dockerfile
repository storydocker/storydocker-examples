FROM ghcr.io/storydocker/storydocker:main@sha256:a66d66d1a3fc098c764727e1ced7c577984547b8930fc4a3e08a708e1676e8af

WORKDIR /usr/src/app

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL verbose

COPY ./examples ./workspaces/
RUN npm i && npm cache clean --force

# Make storybook port available externally
EXPOSE 6001-6012
EXPOSE 2002

# run storybook app
CMD ["npm", "run", "storybook"]
