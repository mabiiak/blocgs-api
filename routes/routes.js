const express = require('express');

const rotas = express.Router();

const controllerUser = require('../controllers/User');
const validateUser = require('../middlewares/validateUser');

const controllerLogin = require('../controllers/Login');
const validateLogin = require('../middlewares/validateLogin');
const validateToken = require('../middlewares/validateToken');

const controllerCategorie = require('../controllers/Category');
const validateCategorie = require('../middlewares/validateCategory');

const controllerPost = require('../controllers/Post');

// --------------------------------------------------------------

rotas.post('/user', validateUser.user, validateUser.mail, controllerUser.create);

rotas.get('/user', validateToken.token, controllerUser.getAll);

rotas.get('/user/:id', validateUser.checkId, validateToken.token, controllerUser.getByEmail);

// -------------------------------------------------------------------------------------------

rotas.post('/login', validateLogin.login, validateLogin.existEmail, controllerLogin.login);

// -------------------------------------------------------------------------------------------

rotas.post(
  '/categories',
  validateToken.token,
  validateCategorie.categorie,
  controllerCategorie.create,
);

rotas.get('/categories', validateToken.token, controllerCategorie.getAll);

// ----------------------------

rotas.post('/post');

rotas.get('/post', validateToken.token, controllerPost.getAll);

rotas.get('/post/:id');

rotas.put('/post/:id');

module.exports = rotas;
