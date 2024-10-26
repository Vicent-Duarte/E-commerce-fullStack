const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token no proporcionado o formato incorrecto' });
  }

  const token = authHeader.split(' ')[1];
  
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token no válido' });
    }
    
    req.user = decoded.user;
    next();
  });
}

module.exports = verifyJwt;