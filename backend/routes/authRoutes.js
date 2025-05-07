const express = require('express');
const { registerUser, loginUser } = require('../Controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Protected route example (for testing the middleware)
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: "This is a protected route!", user: req.user });
});

module.exports = router;
