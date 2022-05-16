const User = require('../models/user');
const LineItem = require('../models/lineItem');

async function deleteItem(req, res) {
  console.log("i hit delete")
  console.log(req.params.id)
  //will look through line item database, find and delete
  await LineItem.findByIdAndDelete(req.params.id)
  let user = await User.findById(req.user.id)
  //keep id's that are not equal to req.params.id
  user.cart = user.cart.filter(id => id != req.params.id)
  user.save()
  res.redirect('/products')
}

module.exports = {
  deleteItem
}