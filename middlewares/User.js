const check = (req, res, next) => {
  const { password, displayName } = req.body;

  if (!password) res.status(400).json({ message: '"password" is required' });

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long'
    });
  }

  next();
};

const mail = (req, res, next) => {
  const { email } = req.body;
  const regexMail = /^[a-z0-9.]+@[a-z0-9]/;
  // referencia regex ---> https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

  if (!email) res.status(400).json({ message: '"email" is required' });

  if (regexMail.test(email) === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

module.exports = { check, mail };
