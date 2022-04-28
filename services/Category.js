const { Category } = require('../models');

const create = async (newCategory) => {
  const add = await Category.create({
    name: newCategory,
  });

  return add;
};

const getAll = async () => {
  const allCategorys = await Category.findAll();

  return allCategorys;
};

const quantity = async () => {
  const allCategorys = await getAll();
  const id = allCategorys.length;
  return id;
};

module.exports = { create, getAll, quantity };
