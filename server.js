const jsonServer = require('json-server');
const server = jsonServer.create();
const data = require('./data/db')();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

//var env = process.env.NODE_ENV || 'development'

server.use(middlewares);

// prepend all routes with '/api'
// ex: '/api/users'
server.use('/api', router);

// start server
server.listen(process.env.PORT || 3000, () => {
  console.log(`JSON Server is running ${process.env.PORT || 3000}`);
});