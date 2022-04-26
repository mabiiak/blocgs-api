const token = (req, res, next) => {
  const validateToken = req.headers.authorization;

  if (!validateToken) return res.status(401).json({ message: 'Token not found' });

  if (validateToken.length < 15) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = { token };
