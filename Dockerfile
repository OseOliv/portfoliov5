FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache bash && \
    npm install -g @angular/cli

COPY package*.json ./

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000"]
