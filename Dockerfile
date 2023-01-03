FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN cp .env.example .env
RUN cat .env
RUN ls -a
ENV STRAPI_API_URL=http://172.21.1.131:8081
ENV STRAPI_TOKEN=51a55fc95d84a3a04f5915ece7c48ffeaf9c0c0a06d5279d858e21805d3aad88c885d0aac91dcbd37e2aa57bc15b349721495d569a1c6a555306cffce5a93c7122cc7c4d41abd91a38d424628e75fda674187888ef2dd59df9b51ac96a46bc139d957aae0f13b928f9327c2db5ddc452816a1256b06e516f87b9ee137beaaded
RUN npm install -g gatsby-cli
RUN yarn install
RUN gatsby clean
RUN gatsby build

FROM nginx:1.22-alpine AS deploy
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
COPY nginx/nginx.conf /etc/nginx/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
