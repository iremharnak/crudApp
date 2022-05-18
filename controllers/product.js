const User = require('../models/user');
const Product = require('../models/product');
const LineItem = require('../models/lineItem');
const res = require('express/lib/response');
// const user = require('../models/user');

// showing the home page
function index(req, res, next) {
  res.render('../views/products/landing.ejs', {
    user: req.user,
    name: req.query.name
  });
  console.log(req.query)
}

// showing the sneaker index page
async function showSneakers(req, res, next) {
  let products = await Product.find();
  res.render('../views/products/sneakers.ejs', {
    products: products
  });
}

//  show shoe detail page
async function showDetail(req, res) {
  let sneaker = await Product.findById(req.params.id);
  res.render('../views/products/show-sneaker.ejs', { sneaker });
}

//add to cart function
async function addToCart(req, res) {
  //the line below adds the id to the product object -> req.body now will have the 3 things it needs
  req.body.product = req.params.id
  console.log("reqbodyproduct is", req.body.product)
  //creating a new item with the id, quantity & size
  let cartItem = await new LineItem(req.body)
  console.log("this is cart item", cartItem)
  //save makes the ID possible so you can push it later
  await cartItem.save()
  //find user by using req.user.id
  let user = await User.findById(req.user._id)
  user.cart.push(cartItem.id)
  await user.save()
  console.log('cart item is', cartItem)
  cartItem = await LineItem.findById(cartItem.id).populate('product')
  console.log('and NOW cartItem is', cartItem)
  res.render('products/cart.ejs', { cartItem })
}

module.exports = {
  index,
  showSneakers,
  showDetail,
  addToCart
}