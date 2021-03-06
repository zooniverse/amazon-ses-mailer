FROM node:10

RUN mkdir -p /usr/src
WORKDIR /usr/src/

COPY ./ .
RUN chown -R node:node .

USER node

RUN npm install

ENTRYPOINT ["npm"]
CMD ["run", "dev"]
