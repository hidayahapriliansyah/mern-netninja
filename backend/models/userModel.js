const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.statics.signup = async function(email, password) {
  if (!email || !password) {
    throw new Error('All field must be filled');
  }

  const exist = await this.findOne({ email });
  if (exist) {
    throw new Error('Email already in use');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Email is not valid');
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error('Password is not strong enoug');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model('User', userSchema);
