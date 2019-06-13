FROM node:9-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app
ADD dist/angular-music-application/index.html  /usr/src/app/dist/angular-music-application
RUN npm install
RUN npm install http-server -g
CMD ["http-server", "-p", "4200"]
