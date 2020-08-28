FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

USER node

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:dev"]