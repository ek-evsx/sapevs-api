FROM node:12

WORKDIR /evs-api/

COPY package.json .

RUN npm i

COPY . .

EXPOSE 5657

CMD ["npm", "run", "dev"]
