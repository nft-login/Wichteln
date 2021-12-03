FROM node:16.13-slim AS ui-build
WORKDIR /usr/src/app
COPY app/ ./app/
RUN cd app && yarn install && yarn build

FROM node:16.13-slim AS server-build
WORKDIR /root/
COPY api/package*.json ./api/
RUN cd api && yarn install
COPY api/ ./
COPY --from=ui-build /usr/src/app/app/dist ./public
RUN yarn build

EXPOSE 3080

CMD ["node", "./build/index.js"]