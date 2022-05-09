const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  googleId: String,
})

module.exports = mongoose.model('User', userSchema);