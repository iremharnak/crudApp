const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  
  name: String,
  brand: String,
  desc: String,
  category: String,
  size: [],
  imgURL: String,
  price: Number
})

module.exports = mongoose.model('Product', productSchema);