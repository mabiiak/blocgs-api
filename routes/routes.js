const express = require('express');

const rotas = express.Router();

const { create } = require('../controllers/User');
const validate = require('../middlewares/User');

rotas.post('/user', validate.check, validate.mail, create);

module.exports = rotas;
