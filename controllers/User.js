const service = require('../services/User');
const { createToken } = require('../middlewares/jwt');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = createToken(req.body);

  const newUser = {
    displayName, email, password, image,
  };

  await service.create(newUser);

  res.status(201).json({ token });
};

module.exports = { create };
