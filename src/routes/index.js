const routes = require('express').Router();
const students = require('./students');

routes.use('/students', students);

routes.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Service is up and running' });
});

module.exports = routes;