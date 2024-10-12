// routes/tasks.js
const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
  const { title, description, subject, priority, dueDate, userId } = req.body;
  const task = new Task({ title, description, subject, priority, dueDate, userId });
  await task.save();
  res.json(task);
});

// Get tasks by user
router.get('/:userId', async (req, res) => {
  const tasks = await Task.find({ userId: req.params.userId });
  res.json(tasks);
});

// Update a task
router.put('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

module.exports = router;