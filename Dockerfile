FROM node:latest

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY --chown=node:node package*.json ./

USER node

RUN npm install --no-optional && npm cache clean --force

COPY --chown=node:node . .