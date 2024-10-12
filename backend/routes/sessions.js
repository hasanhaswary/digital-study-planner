const express = require('express');
const StudySession = require('../models/StudySession');
const router = express.Router();

// Create a study session
router.post('/', async (req, res) => {
  const { subject, date, duration, userId } = req.body;
  const session = new StudySession({ subject, date, duration, userId });
  await session.save();
  res.json(session);
});

// Get study sessions by user ID
router.get('/:userId', async (req, res) => {
  const sessions = await StudySession.find({ userId: req.params.userId });
  res.json(sessions);
});

module.exports = router;
