const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get('/', workoutController.getAllWorkouts);

// GET a single workouts
router.get('/:id', workoutController.getWorkout);

// POST a workout
router.post('/', workoutController.createWorkout);

// DELETE a workout
router.delete('/:id', workoutController.deleteWorkout);

// UPDATE a workout
router.patch('/:id', workoutController.updateWorkout);

module.exports = router;
