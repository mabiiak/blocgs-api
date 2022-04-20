const { User } = require('../models');

// const getAll = async () => {
//   const allUsers = await User.findAll();
//   console.log(allUsers);
//   return allUsers;
// };

const create = async (newUser) => {
  const user = await User.create({
    displayName: newUser.displayName,
    email: newUser.email,
    password: newUser.password,
    image: newUser.image,
  });

  return user;
};

module.exports = { create };
