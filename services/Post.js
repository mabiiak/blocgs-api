const { BlogPost, User } = require('../models');
// const User = require('../models/User');

const getAll = async () => {
  const all = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user', 
    }],
  });
  return all;
};

module.exports = { getAll };
