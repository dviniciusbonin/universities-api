FROM node:16-alpine3.16 as build

WORKDIR /home/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build


#Development
FROM build as development

WORKDIR /home/app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "start:dev"]

#Production
FROM build as production

WORKDIR /home/app

COPY package*.json ./

RUN npm install --production

COPY --from=build /home/app/dist ./dist

ENTRYPOINT ["sh", "scripts/deploy.sh"]