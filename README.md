# Instruções para executar a aplicação

A aplicação pode ser executada utilizando o docker ou apenas o node.js - projeto feito na versao lts 16



##  Para executar utilizando docker e docker-compose (Recomendado)

- Configure seu arquivo .env com base no .env.example disponibilizado nesse repositorio

- Com docker e docker-compose instalados execute(Esta forma já executado o seeder para popular o banco de dados):
  ```docker-compose up prod -d```


## Para executar utlizando node e npm
Recomenda-se o uso das versões node: v16.17.0 e npm 8.15.0

- Configure seu arquivo .env com base no .env.example disponibilizado nesse repositorio
- Instale as dependencias com ```npm i```
- Execute o seeder para popular o banco com o comando: ```npx nestjs-command create:universities```
- Execute a aplicação com ```npm run start```


