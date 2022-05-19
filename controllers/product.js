const User = require('../models/user');
const Product = require('../models/product');
const LineItem = require('../models/lineItem');
const res = require('express/lib/response');
const lineItem = require('../models/lineItem');


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
  //parse form into newItem obj 
  let newItem = req.body;
  newItem.product= req.params.id;
  newItem.shopper = req.user.id,
  //add the logged user id to a new 'shopper' property to that obj
    //create new LineItem in the database using newItem & returns that to the newItem variable
  newItem = await LineItem.create(newItem)
  
  res.redirect('/products/cart')
}

// render the cart
async function displayCart(req, res) {
  let cartItems = await LineItem.find({shopper: req.user.id}).populate('product')
  console.log("My cart items are", cartItems);
  res.render('../views/products/cart.ejs', { cartItems })
}
async function purchaseAll(req,res) {
  await LineItem.deleteMany({shopper: req.user.id})
  res.redirect('/products')
}


async function updateCart(req,res) {
  let cartItem = await LineItem.findByIdAndUpdate(req.params.id,req.body)
  res.redirect('/products/cart')
}

module.exports = {
  index,
  showSneakers,
  showDetail,
  addToCart,
  displayCart,
  purchaseAll,
  updateCart
}