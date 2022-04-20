const express = require('express');

const rotas = express.Router();

const { create } = require('../controllers/User');

rotas.post('/user', create);

module.exports = rotas;
