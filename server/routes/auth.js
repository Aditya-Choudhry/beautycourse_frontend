const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Test accounts for development
    const testAccounts = {
      'admin@test.com': { password: 'admin123', role: 'admin' },
      'provider@test.com': { password: 'provider123', role: 'provider' },
      'user@test.com': { password: 'user123', role: 'user' }
    };

    // Check if it's a test account
    if (testAccounts[email]) {
      if (password === testAccounts[email].password) {
        const token = generateToken({ 
          id: email,
          role: testAccounts[email].role 
        });
        return res.json({ token, role: testAccounts[email].role });
      }
    }
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;