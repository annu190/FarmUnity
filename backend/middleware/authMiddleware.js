const jwt = require('jsonwebtoken');

// Token verification middleware
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Get token from 'Authorization' header

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    req.user = decoded; // Attach decoded user info to the request object
    next(); // Move to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
