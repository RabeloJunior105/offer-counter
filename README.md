# Offer Counter - Eclipseworks

#### Como rodar o projeto local:

Instalar as dependecias do projeto
```sh
npm install
```

Iniciar o banco de dados
```sh
docker-compose up --detach
```
Adicionar o arquivo .env (Default "postgres")
```sh
DATABASE_USER
DATABASE_PASSWORD
DATABASE_NAME
```
Popular o banco de dados
```sh
npx knex seed:run
```

Iniciar o projeto
```sh
npm run start:dev
```

## Rotas Offer Counter (Balcão de Ofertas)
### Find All 
```
[GET]
http:localhost:3000/offer-counter?take=5&page=1
```
### Create
```
[POST]
http:localhost:3000/offer-counter?user_id=1
```
BODY:
```
{
    "currency_id": 1,
    "wallet_id": 1,
    "amount": 15340.0
}
```
### Delete
```
[DELETE]
http:localhost:3000/offer-counter?user_id=1&id=6
```


## Pontos de melhoria
+ Criar os testes de cada serviço(unitario)
+ Criar os testes de cada controller (End To End) 
+ Criar um serviço de cache para buscar as movimentações do WalletMovement (Como sistema de movimentação são muitas linhas no BD a cada busca o banco juntamente com o algoritimo teria que passar por todas as linhas do banco de dados isso poderá ocorrer um grande gargalo quando o banco de dados estiver com muitos dados)
+ Melhorar nomenclatura das variaveis ultilizadas, algumas variaveis que ultilizei talvez não se encaixasse tanto no contexto do projeto.
+ Melhorar o sistema de seeds, como não era algo realmente relacionado ao projeto não dei tanta atenção, porem o sistema de seeds esta com um bug de rodar as seeds que ja foram inseridas no DB
+ Conteinerizar o projeto com o docker para facilitar e melhorar a gerencia da infraestrutura 
