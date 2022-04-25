const { createToken } = require('../middlewares/jwt');

const login = (req, res) => {  
  const token = createToken(req.body);

  res.status(200).json({ token });
};

module.exports = { login };
