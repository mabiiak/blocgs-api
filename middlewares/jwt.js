const jwt = require('jsonwebtoken');

const createToken = (info) => {
  const secret = 'secretToken';
  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  
  const token = jwt.sign({ data: info }, secret, jwtConfig);
  return token;
};

module.exports = { createToken };
