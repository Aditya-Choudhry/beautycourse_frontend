
const express = require('express');
const { protect } = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

router.use(protect);

router.get('/profile', async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
});

router.put('/profile', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true }).select('-password');
  res.json(user);
});

router.get('/leads', async (req, res) => {
  const leads = await User.find({ referredBy: req.user._id }).select('-password');
  res.json(leads);
});

router.get('/subscriptions', async (req, res) => {
  const user = await User.findById(req.user._id).select('subscription');
  res.json(user.subscription);
});

module.exports = router;
