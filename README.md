# Produto API

Este é um projeto de API para gerenciar produtos utilizando Express e PostgreSQL, configurado com Docker.

## Tecnologias Usadas

- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose

## Pré-requisitos

Antes de começar, você precisará ter instalado:

 - NPM
 - Docker
 - PostgreSQL
 - Postman, Insomnia ou qualquer Client API da sua preferência


## Configuração do Ambiente

### Clonando o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/pgrigolli/produto-api.git
```

### Configure a pasta .env

Ao clonar o repositório, será necessário configurar a pasta .env para que o banco de dados rode e se conecte corretamente.
No repositório clonado existe um arquivo com o nome **.env.example**. Crie um arquivo com o nome **.env** ou apenas retire o **.example** do arquivo já existente.
Dentro desse arquivo será necessário colocar as suas informações do postgreSQL, como nome de usuário e senha.

### Executando

Com tudo pronto, basta executar o projeto e testá-lo no Client API escolhido.
Primeiro, entre no diretório onde o projeto foi copiado.
```bash
cd produto-api
```
Instale as dependencias
```bash
npm i
```
Execute a API
```bash
npm run dev
```
Ao executar a API, a tabela de produtos e o seeding do banco de dados serão feitos automaticamente.

### Docker

Para executar o Docker, basta abrir o terminal e executar os seguintes comandos:
```bash
docker-compose up --build
```

Com a API rodando, basta testar as requisições no seu Client API.

### GET
#### Retorna todos os produtos.
```postman
http://localhost:3000/produtos
```
#### Retorna o produto com o Id da URL.
```postman
http://localhost:3000/produtos/3
```

### POST
#### Cria um novo produto com as informações do corpo da requisição
```postman
http://localhost:3000/produtos
```
Exemplo de corpo da requisição
```
{
    "description": "Produto Exemplo",
    "price": 29.99,
    "quantity": 100
}
```
### PUT
#### Atualiza um produto já existente
```postman
http://localhost:3000/produtos/3
```
Exemplo de corpo da requisição
```
{
    "description": "Produto Exemplo Atualizado",
    "price": 20,
    "quantity": 30
}
```
No caso do Update, o produto a ser atualizado é o produto com o ID que consta na URL, tendo as suas informações substituidas pelas do corpo da requisição.
### DELETE
#### Apaga um produto 
```postman
http://localhost:3000/produtos/3
```
Apaga o produto com o ID presente na URL.



