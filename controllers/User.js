const service = require('../services/User');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = {
    displayName, email, password, image,
  };

  await service.create(newUser);

  res.status(201).json({ token: 'ex1451564151' });
};

// cria usuario ---> ok
// validações --->
// cria token --->

module.exports = { create };
