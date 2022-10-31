FROM node:18-alpine as base

USER node

RUN install -d -m 0755 -o node -g node /home/node/app

WORKDIR /home/node/app

FROM base as deps

ADD --chown=node package*.json yarn.lock ./

RUN yarn install

FROM deps as app

ADD --chown=node . .

ENV NODE_ENV=production

RUN yarn build

EXPOSE 1337

ENTRYPOINT [ "yarn", "start" ]
