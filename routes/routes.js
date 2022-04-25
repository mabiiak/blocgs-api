const express = require('express');

const rotas = express.Router();

// ----------------------------------------------------------

const { create } = require('../controllers/User');
const { validate, mail } = require('../middlewares/validateUser');

rotas.post('/user', validate, mail, create);

// ----------------------------------------------------------

const { login } = require('../controllers/Login');
const { validateLogin, existEmail } = require('../middlewares/validateLogin');

rotas.post('/login', validateLogin, existEmail, login);

module.exports = rotas;
