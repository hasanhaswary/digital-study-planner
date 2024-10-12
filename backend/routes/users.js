const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a new user (signup)
router.post('/', async (req, res) => {
  const { username, password, email } = req.body;
  const user = new User({ username, password, email });
  await user.save();
  res.json(user);
});

// Get user by ID
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.json(user);
});

module.exports = router;
