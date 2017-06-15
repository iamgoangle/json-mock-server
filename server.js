// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const port = process.env.PORT || 4000;

// my database
let db = require('./src/db.js');
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running')
});