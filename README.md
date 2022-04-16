# TypeScript Express Template (+ PostgreSQL)

## 📚 Introduction

A really simple starter TypeScript template for REST APIs built with [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/).

## ⭐ Features:

- Sample REST API routes + 404
- Sample validation > controller > service handlers
- PostgreSQL db config & setup script
- Route tests
- Prettier + ESLint configs
- VSCode settings config

## 🚨 Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Visual Studio Code](https://code.visualstudio.com/) (optional)

## 🛠 Installation

1. Clone this repository or [click here to generate a new one using this template](https://github.com/ahhreggi/ts-express-template/generate)
   ```
   git clone https://github.com/ahhreggi/ts-express-template
   ```
2. Navigate to the project directory and install dependencies
   ```
   cd ts-express-template
   npm install
   ```
3. Create and configure a `.env` file using `.env.example`
4. Set up PostgreSQL (see next section) or your chosen database
5. Run the server
   ```
   npm run serve
   ```
6. Visit <a href="http://localhost:3000/">http://localhost:5000/</a> on your browser

## 🐘 PostgreSQL Setup

1. Configure PG variables in `.env`
2. Configure database & table setup script in `src/schemas/schema.sql`
3. Run schema:
   ```
   npm run setup-db
   ```

## 📝 Useful commands

```
npm run serve       // start the server
npm run test        // run jest tests
npm run lint        // run eslint
npm run plint       // run prettier + eslint
npm run setup-db    // setup/reset db
npm run build       // run ts compiler (generates dist)
```

## 🔴 Sample Endpoints

```
GET /
GET /:id
POST /
PUT /:id
DELETE /:id
GET /some/invalid/path
```

## 🟢 Sample Response

```
// GET localhost:5000

{
  "statusCode": 200,
  "requestDetails": {
    "route": "GET /",
    "params": {},
    "body": {}
  },
  "body": [
    {
      "id": 1,
      "name": "Name1",
      "description": "Description1"
    },
    {
      "id": 2,
      "name": "Name2",
      "description": "Description2"
    },
    {
      "id": 3,
      "name": "Name3",
      "description": "Description3"
    }
  ]
}
```
