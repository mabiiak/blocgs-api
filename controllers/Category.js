const service = require('../services/Category');

const create = async (req, res) => {
  const { name } = req.body;

  await service.create(name);
  const id = await service.quantity();

  res.status(201).json({ id, name });
};

const getAll = async (req, res) => {
  const categories = await service.getAll();
  res.status(200).json(categories);
};

module.exports = { create, getAll };
