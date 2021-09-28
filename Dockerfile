FROM node as build

COPY './package.json' './yarn.lock' '.'
RUN yarn install --pure-lockfile
COPY . .

RUN yarn build --production

FROM nginx as static

COPY --from=build /dist /usr/share/nginx/html

RUN echo OK > /usr/share/nginx/html/ping