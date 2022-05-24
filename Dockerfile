FROM node:17.9.0 as build

COPY './package.json' './yarn.lock' './'
RUN yarn install --pure-lockfile
COPY . .

RUN yarn build --production

FROM nginx as static

COPY --from=build /dist /usr/share/nginx/html

RUN echo OK > /usr/share/nginx/html/ping
ENV a=https://paste.evgeniyshubin.dev/
RUN find . -type f -name "*.js" -exec sed -i "s|http://localhost:8000|${PROD_URL}|g" {} +
