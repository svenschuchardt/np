FROM node:alpine

ENV ME_USER=SVEN
ENV ME_PWD=secret_pwd

EXPOSE 8088
WORKDIR /home/app

RUN npm install express
RUN mkdir -p /home/app

COPY . /home/app

CMD ["node", "/home/app/app.js"]
