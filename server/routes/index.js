const router = require('express').Router({ mergeParams: true });

const { gitClone } = require('../core');

router.get('/ping', (req, res) => {
  res.send({ message: 'pong' });
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
