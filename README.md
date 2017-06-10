## MY JSON MOCK SERVER
1..2..3 generates json mock server on your dev machine.

## Installation
1) JSON-SERVER
[https://github.com/typicode/json-server](https://github.com/typicode/json-server)

    `npm install -g json-server`

2) Fake Data module

    `npm install faker`

## How to mock data?
1) Create new schema in `src/mock/<your_schema.js>`
2) Reference to https://github.com/marak/Faker.js/ for mocking data pattern

## Run
`npm run mock`

Result
```
  \{^_^}/ hi!

  Loading ./src/db.js
  Done

  Resources
  http://localhost:5000/customers
  http://localhost:5000/products

  Home
  http://localhost:5000
```