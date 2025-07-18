FROM node:24-alpine3.21 AS build
WORKDIR /app 
COPY . .
RUN npm install &&  npm run build 

# Serving the app with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html 
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]
