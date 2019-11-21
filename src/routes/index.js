const routes = require('express').Router();
const students = require('./students');
const test = require('./testing')

routes.use('/students/post', students);
routes.use('/test',test)

routes.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Service is up and running' });
});

module.exports = routes;