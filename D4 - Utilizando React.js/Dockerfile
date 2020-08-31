

FROM node:12.18.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN yarn 
RUN yarn add react-scripts@3.4.0 -g

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "run", "start"]

