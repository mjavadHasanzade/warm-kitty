FROM node as builder

# Install app dependencies
COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

FROM node:slim

ENV NODE_ENV production
USER node

# Install app dependencies
COPY package*.json ./

RUN yarn

COPY --from=builder ./dist ./dist

EXPOSE 8080
CMD [ "node", "dist/server.js" ]