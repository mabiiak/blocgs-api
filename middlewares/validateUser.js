const Joi = require('joi');
const services = require('../services/User');

const userSchema = Joi.object({
  password: Joi.string().required(),
  displayName: Joi.string().min(8),
  email: Joi.string().email().required(),
  image: Joi.string(),
});

const user = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) throw error;

  next();
};

const mail = async (req, res, next) => {  
  const { email, password } = req.body;
  const checkEmail = await services.getBy({ email });

  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be 6 characters long' });
  }
  // ver como personalizar mensagem de erro Joi e como usar o try/catch/throw

  if (checkEmail !== null) return res.status(409).json({ message: 'User already registered' });

  next();
};

const checkId = async (req, res, next) => {
  const { id } = req.params;

  const filter = await services.getBy({ id });

  if (filter === null) return res.status(404).json({ message: 'User does not exist' });

  next();
};

module.exports = { user, mail, checkId };
