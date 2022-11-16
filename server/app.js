const express = require('express');
const config = require('@config');
const app = express();

if (config.NODE_ENV !== 'production') {
  app.use(require('cors')());
}

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));


app.use(require('./routes'));

app.use(express.static('dist/dfa-client'));

app.use('**', (_req, _res, next) => {
  const e = new Error('Path not found');
  e.statusCode = 404;
  next(e);
});

app.use((err, _req, res, _next) => {
  const code = err.statusCode || 500;
  res.status(code).send(err);
});

module.exports = app;

if (require.main === module) {
  app.listen(config.PORT)
}
