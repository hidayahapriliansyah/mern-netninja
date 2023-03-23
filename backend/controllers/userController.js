const User = require('../models/userModel');

const login = async (req, res) => {
  res.json({ mssg: 'login controller' });
}

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(201).json({ email: user.email, user });
  } catch (error){
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  login,
  signup,
};