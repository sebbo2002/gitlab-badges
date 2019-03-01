FROM node:alpine
RUN mkdir -p "/app"

WORKDIR "/app"
ADD "./package.json" "/app/package.json"
ADD "./package-lock.json" "/app/package-lock.json"
RUN npm ci

ADD "./app.js" "/app/app.js"
ADD "./lib" "/app/lib"
CMD [ "node", "/app/app.js" ]