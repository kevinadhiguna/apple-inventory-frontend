FROM node:16-alpine

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn --frozen-lockfile

COPY public/ public/
COPY src/ src/

EXPOSE 3000

CMD [ "yarn", "start" ]
