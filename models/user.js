const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  cart: [{
    type: Schema.Types.ObjectId, // ie., an array of references
    ref: 'lineItem' // id belongs to this product
  }]
})

module.exports = mongoose.model('User', userSchema);