const jwt = require('jsonwebtoken');
const service = require('../services/User');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const secret = 'secretToken';
  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

  const token = jwt.sign({ data: req.body }, secret, jwtConfig);

  const newUser = {
    displayName, email, password, image,
  };

  await service.create(newUser);

  res.status(201).json({ token });
};

module.exports = { create };
