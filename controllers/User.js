const service = require('../services/User');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = {
    displayName, email, password, image,
  };

  await service.create(newUser);

  res.status(200).json({ message: 'user criado' });
};

module.exports = { create };
