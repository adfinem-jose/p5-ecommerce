import express from 'express';

import {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from '../controllers/workout.controller.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

export default router;
