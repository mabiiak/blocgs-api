const service = require('../services/Post');

const getAll = async (req, res) => {
  const allPosts = await service.getAll();
  res.status(200).json(allPosts);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const posts = await service.getById({ id });

  res.status(200).json(posts);
};

// const create = async (req, res) => {
//   const ex = [ id, idUser, title, content ];
//   res.status(201).json(ex);
// };

module.exports = { getAll, getById };
