const { User } = require('../models');

const create = async (newUser) => {
  const user = await User.create({
    displayName: newUser.displayName,
    email: newUser.email,
    password: newUser.password,
    image: newUser.image,
  });
  
  return user;
};

const findEmail = async (search) => {
  const find = await User.findOne({
    where: search,
  });
  return find;
};

const getAll = async () => {
  const allUsers = await User.findAll();

  return allUsers;
};

module.exports = { create, findEmail, getAll };
