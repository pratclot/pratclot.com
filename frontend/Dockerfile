FROM node:18-alpine as deps

USER node

RUN install -d -m 0755 -o node -g node /home/node/app

WORKDIR /home/node/app

ADD --chown=node package*.json yarn.lock ./

RUN npm install

FROM deps as app

ADD --chown=node . .

RUN yarn build

FROM joseluisq/static-web-server

COPY --from=app /home/node/app/public ./public
