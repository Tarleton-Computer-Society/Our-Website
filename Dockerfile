from node:17-alpine as builder
WORKDIR /app
copy package.json .
copy package-lock.json .
RUN npm install
COPY . .
RUN npm build



from nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g","daemon off;"]
