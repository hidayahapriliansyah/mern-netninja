const express = require('express');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ message: "Get all workouts" });
});

// GET a single workouts
router.get('/:id', (req, res) => {
  res.json({ message: "Get a single workout" });
});

// POST a workout
router.post('/', (req, res) => {
  res.json({ message: "POST a single workout" });
});

// DELETE a workout
router.delete('/', (req, res) => {
  res.json({ message: "DELETE a single workout" });
});

// UPDATE a workout
router.patch('/', (req, res) => {
  res.json({ message: "UPDATE a single workout" });
});

module.exports = router;
