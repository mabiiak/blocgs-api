const service = require('../services/User');
const { createToken } = require('../middlewares/jwt');

const create = async (req, res) => {
  const token = createToken(req.body);

  await service.create(req.body);

  res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const allUsers = await service.getAll();

  res.status(200).json(allUsers);
};

module.exports = { create, getAll };
