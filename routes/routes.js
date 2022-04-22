const express = require('express');

const rotas = express.Router();

const { create } = require('../controllers/User');
const { validate, mail } = require('../middlewares/User');

rotas.post('/user', validate, mail, create);

module.exports = rotas;
