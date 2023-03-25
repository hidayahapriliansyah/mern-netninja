require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const workoutsRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

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
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

// routes
app.use('/api/workouts', workoutsRoutes);
app.use('/api/user', userRoutes);
