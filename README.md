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