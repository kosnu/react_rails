FROM node:12.12.0-alpine

RUN mkdir -p /app/client
WORKDIR /app/client

ENV PATH /app/client/node_modules/.bin:$PATH

COPY package.json /app/client/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
