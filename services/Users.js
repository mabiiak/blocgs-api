const { User } = require('../models');

const getAll = async () => {
  const allUsers = await User.findAll();
  console.log(allUsers);
  return allUsers;
};

module.exports = { getAll };
