const services = require('../services/User');

const check = (req, res, next) => {
  const { password, displayName } = req.body;

  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
};

const mail = async (req, res, next) => {
  const { email } = req.body;
  const regexMail = /\S+@\S+\.\S+/;
  // Com ajuda do Emerson / https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

  if (!email && email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  
  const checkEmail = await services.findEmail({ email });

  if (regexMail.test(email) === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (checkEmail !== null) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = { check, mail };
