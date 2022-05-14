const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId, // ie., an array of references
    ref: 'Product' // id belongs to this product
  },
  quantity: Number,
  size: Number
})



module.exports = mongoose.model('lineItem', lineItemSchema);