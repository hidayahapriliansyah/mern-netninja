const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// GET all workouts
router.get('/', workoutController.getAllWorkouts);

// GET a single workouts
router.get('/:id', workoutController.getWorkout);

// POST a workout
router.post('/', workoutController.createWorkout);

// DELETE a workout
router.delete('/', (req, res) => {
  res.json({ message: "DELETE a single workout" });
});

// UPDATE a workout
router.patch('/', (req, res) => {
  res.json({ message: "UPDATE a single workout" });
});

module.exports = router;
