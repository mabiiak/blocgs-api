const service = require('../services/User');
const { createToken } = require('../middlewares/jwt');

const create = async (req, res) => {
  const token = createToken(req.body);
  console.log(token);
  await service.create(req.body);

  res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const allUsers = await service.getAll();

  res.status(200).json(allUsers);
};

const getByEmail = async (req, res) => {
  const { id } = req.params;
  
  const searchUser = await service.getBy(Number(id));

  res.status(200).json(searchUser);
};

module.exports = { create, getAll, getByEmail };
