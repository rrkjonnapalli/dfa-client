const http = require('http');
const config = require('../config');
const app = require('./app');

const server = http.createServer(app);

const unknownErrorHandler = (error, _origin) => {
  console.log('Unknown error', error);
}
process.on('uncaughtException', unknownErrorHandler)
process.on('unhandledRejection', unknownErrorHandler)

const listener = server.listen(config.PORT);

listener.on('listening', () => {
  console.log(`Server listening on port ${config.PORT}`);
});

listener.on('error', (e) => {
  console.log(`Error while listening `, e);
});
