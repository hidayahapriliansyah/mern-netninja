require('dotenv').config();
const express = require('express');
const workoutsRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/workouts', workoutsRoutes);

// listen for request
app.listen(process.env.PORT, () => {
  console.log(`App listen on port ${process.env.PORT}`);
});

