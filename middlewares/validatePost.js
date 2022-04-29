const services = require('../services/Post');

const checkId = async (req, res, next) => {  
  const { id } = req.params;

  const existId = await services.getById({ id });

  if (existId === null) return res.status(404).json({ message: 'Post does not exist' });

  next();
};

module.exports = { checkId };
