// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('User');

// ... (existing routes)

// Register route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create a new user
    const user = new User({ username, password });
    await user.save();
    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
});

module.exports = router;
