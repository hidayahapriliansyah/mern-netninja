require('dotenv').config();
const express = require('express');
const workoutsRoutes = require('./routes/workouts');
const mongoose = require('mongoose');

// express app
const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// middleware
app.use(express.json());

// routes
app.use('/api/workouts', workoutsRoutes);
