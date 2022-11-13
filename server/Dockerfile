FROM node:alpine

WORKDIR /app

COPY /package.json ./
RUN npm install

COPY . ./

ENV MONGO_URL=mongodb+srv://coder:skD69xlwhc9ID0io@cluster0.zpsiduv.mongodb.net/?retryWrites=true&w=majority
ENV JWTSECRET=ZomatoApp
ENV AWS_S3_ACCESS_KEY=AKIAYY7VNPBIY5HKDJHG
ENV AWS_S3_SECRET_KEY=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
ENV GOOGLE_CLIENT_ID=629980427902-hl8qologt2r1h9rvhugt7a274au7842h.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV REACT_APP_CLIENT_URL=http://localhost:4000/

RUN npm run build

CMD [ "npm" , "run", "start" ]

