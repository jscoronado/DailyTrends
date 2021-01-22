# STEP 1 BUILD VUE PROJECT
FROM node:12.18.1-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm run build

# STEP 2 CREATE NGINGX SERVER
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]