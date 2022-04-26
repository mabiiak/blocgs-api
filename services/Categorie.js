const { Categorie } = require('../models');

const create = async (newCategorie) => {
  const add = await Categorie.create({
    name: newCategorie,
  });

  return add;
};

const getAll = async () => {
  const allCategories = await Categorie.findAll();

  return allCategories;
};

const quantity = async () => {
  const allCategories = await getAll();
  const id = allCategories.length;
  return id;
};

module.exports = { create, getAll, quantity };
