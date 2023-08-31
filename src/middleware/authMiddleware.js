const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó token.' });
  }
  try {
    const decoded = jwt.verify(token, 'secretKey'); // Utiliza la misma clave secreta que en tu controlador
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido.' });
  }
};

module.exports = authMiddleware;