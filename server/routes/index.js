const router = require('express').Router({ mergeParams: true });

const config = require('@config');
const { gitClone } = require('../core');

router.get('/ping', (req, res) => {
  res.send({ message: 'pong' });
});

router.get('/env-config', (req, res, next) => {
  res.send({
    SERVCIES: config.SERVCIES,
    ENV_TYPES: config.ENV_TYPES,
    NODE_ENV: config.NODE_ENV
  });
});

router.get('/refresh', (req, res, next) => {
  gitClone().then(() => {
    res.send({ status: 'success' });
  }).catch(e => {
    e.statusCode = 500;
    next(e);
  });
});

router.post('/create-environment', (req, res) => {
  const data = req.body;
  res.send({ status: 'success' });
});

router.use(require('./restify'));

module.exports = router;
