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
const validatePost = require('../middlewares/validatePost');

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

// rotas.post('/post', controllerPost.create);

rotas.get('/post', validateToken.token, controllerPost.getAll);

rotas.get('/post/:id', validateToken.token, validatePost.checkId, controllerPost.getById);

rotas.put('/post/:id');

module.exports = rotas;
