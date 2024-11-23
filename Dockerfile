FROM node:20

WORKDIR /app

COPY package* /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]
