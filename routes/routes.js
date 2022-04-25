const express = require('express');

const rotas = express.Router();

const controllerUser = require('../controllers/User');
const validateUser = require('../middlewares/validateUser');

const controllerLogin = require('../controllers/Login');
const validateLogin = require('../middlewares/validateLogin');

// ----------------------------------------------------------

rotas.post('/user', validateUser.user, validateUser.mail, controllerUser.create);

rotas.get('/user', validateUser.token, controllerUser.getAll);

// ----------------------------------------------------------

rotas.post('/login', validateLogin.login, validateLogin.existEmail, controllerLogin.login);

module.exports = rotas;
