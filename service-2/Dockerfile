FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install yarn

RUN yarn

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN yarn build

RUN yarn start