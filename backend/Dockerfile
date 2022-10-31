FROM node:18-alpine as deps

USER node

RUN install -d -m 0755 -o node -g node /home/node/app

WORKDIR /home/node/app

ADD --chown=node package*.json yarn.lock ./

RUN npm install

FROM deps

ADD --chown=node . .

EXPOSE 1337

ENTRYPOINT [ "yarn", "develop" ]
