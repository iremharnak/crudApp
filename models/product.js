const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: Number,
  name: String,
  desc: String,
  sku: String,
  category: String,
  brand: String,
  size : [],
})

module.exports = mongoose.model('Product', productSchema);