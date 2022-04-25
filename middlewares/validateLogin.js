const Joi = require('joi');
const services = require('../services/User');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const login = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) throw error;

  next();
};

const existEmail = async (req, res, next) => {  
  const { email } = req.body;
  const checkEmail = await services.findEmail({ email });

  if (checkEmail === null) return res.status(400).json({ message: 'Invalid fields' });

  next();
};

module.exports = { login, existEmail };
