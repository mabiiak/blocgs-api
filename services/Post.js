const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const all = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return all;
};

const getById = async (id) => {
  const posts = await BlogPost.findOne({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
    where: id,
  });

  return posts;
};

module.exports = { getAll, getById };
