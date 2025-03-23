
const express = require('express');
const { protect, restrictTo } = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

router.use(protect, restrictTo('admin'));

router.get('/users', async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

router.get('/leads', async (req, res) => {
  const leads = await User.find({ role: 'student' }).select('-password');
  res.json(leads);
});

router.get('/providers', async (req, res) => {
  const providers = await User.find({ role: 'provider' }).select('-password');
  res.json(providers);
});

router.get('/subscriptions', async (req, res) => {
  const users = await User.find({ subscription: { $exists: true } }).select('-password');
  res.json(users);
});

module.exports = router;
