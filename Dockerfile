FROM node:alpine
WORKDIR /app
COPY package*.json .
ENV NODE_ENV production
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8001

CMD ["npm", "start"]