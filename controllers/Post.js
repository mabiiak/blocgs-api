const service = require('../services/Post');

const getAll = async (req, res) => {
  const allPosts = await service.getAll();
  res.status(200).json(allPosts);
};

module.exports = { getAll };
