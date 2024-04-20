FROM node as builder

# Install app dependencies
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:slim

ENV NODE_ENV production
USER node

# Install app dependencies
COPY package*.json ./

RUN npm ci --production

COPY --from=builder ./dist ./dist

EXPOSE 8080
CMD [ "node", "dist/index.js" ]