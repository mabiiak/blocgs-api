const Joi = require('joi');
const services = require('../services/User');

const userSchema = Joi.object({
  password: Joi.string().min.required(),
  displayName: Joi.string().min(8),
  email: Joi.string().email().required(),
  image: Joi.string(),
});

const validate = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) throw error;

  next();
};

const mail = async (req, res, next) => {  
  const { email, password } = req.body;
  const checkEmail = await services.findEmail({ email });

  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be 6 characters long' });
  }

  if (checkEmail !== null) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = { validate, mail };
