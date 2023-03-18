const express = require('express');
const router = express.Router();

const Workout = require('../models/workoutModel');

// GET all workouts
router.get('/', (req, res) => {
  res.json({ message: "Get all workouts" });
});

// GET a single workouts
router.get('/:id', (req, res) => {
  res.json({ message: "Get a single workout" });
});

// POST a workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
