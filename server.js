let jsonServer = require('json-server');
let server = jsonServer.create();
let router = jsonServer.router(require('./db.js')());
let middleWares = jsonServer.defaults();

server.use(middleWares);
server.use(router);
server.listen(3000, function () {
  console.log('JSON Server is running')
});
