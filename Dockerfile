FROM node:18-alpine3.18
WORKDIR /
COPY package*.json ./
RUN npm install && npm install typescript -g
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
