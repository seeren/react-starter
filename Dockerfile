# DEVELOPMENT

FROM node:19-alpine AS development

RUN apk add zsh

WORKDIR /apps/react-starter

COPY --chown=node:node package*.json .

RUN  npm ci \
  && mkdir node_modules/.cache \
  && chmod -R 777 node_modules/.cache

COPY --chown=node:node . .

CMD ["npm", "start"]

USER node

# BUNDLE

FROM node:19-alpine AS build

ENV NODE_ENV=production

WORKDIR /apps/react-starter

COPY --chown=node:node package*.json .

RUN npm ci --only=production \
  && mkdir node_modules/.cache \
  && chmod -R 777 node_modules/.cache

COPY --chown=node:node . .

RUN npm run build

# PRODUCTION
FROM nginx:1.23.2-alpine as production

ENV NODE_ENV=production

COPY --from=build /apps/react-starter/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
