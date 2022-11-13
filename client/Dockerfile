FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

ENV REACT_APP_CLIENT_URL=http://localhost:4000/

RUN npm run build

FROM nginx
EXPOSE 3000 

COPY ./nginx/default.config /etc/nginx/conf.d/default.conf

COPY --from=0 /app/build /usr/share/nginx/html