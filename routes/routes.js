const express = require('express');

const rotas = express.Router();

const controllerUser = require('../controllers/User');
const validateUser = require('../middlewares/validateUser');

const controllerLogin = require('../controllers/Login');
const validateLogin = require('../middlewares/validateLogin');

const controllerCategorie = require('../controllers/Categorie');

// --------------------------------------------------------------

rotas.post('/user', validateUser.user, validateUser.mail, controllerUser.create);

rotas.get('/user', validateUser.token, controllerUser.getAll);

rotas.get('/user/:id', validateUser.checkId, validateUser.token, controllerUser.getByEmail);

// -------------------------------------------------------------------------------------------

rotas.post('/login', validateLogin.login, validateLogin.existEmail, controllerLogin.login);

// -------------------------------------------------------------------------------------------

rotas.post('/categories', controllerCategorie.create);

rotas.get('/categories', controllerCategorie.getAll);

// ----------------------------

rotas.post('/post');

rotas.get('/post');

rotas.get('/post/:id');

rotas.put('/post/:id');

module.exports = rotas;
