const User = require('../models/user');
const Product = require('../models/product');
const LineItem = require('../models/lineItem');
const res = require('express/lib/response');
// const user = require('../models/user');

// showing the home page
function index(req, res, next) {
  
  
  res.render('../views/products/landing.ejs', {
    user: req.user,
    name:req.query.name});
}
  function show(){
   res.render('../views/products/sneakers.ejs')
 }

 // showing the sneaker index page
async function showSneakers(req, res, next) {
  let products = await Product.find();
 
  res.render('../views/products/sneakers.ejs', {
     products: products});
 }

//  show shoe detail page
async function showDetail(req,res) {
  let sneaker = await Product.findById(req.params.id);
  res.render('../views/products/show-sneaker.ejs', {sneaker});
  
}

//add to cart function to navigate to next page
async function addToCart(req,res) {
//this line adds the id to the product object -> req.body now will have the 3 things it needs

req.body.product = req.params.id

//creating a new item with the id, quantity & size
let cartItem =  await new LineItem(req.body)
//save makes the ID possible so you can push it later
cartItem.save()
//find user by using req.user.id

let user = await User.findById(req.user._id)
user.cart.push(cartItem.id)
user.save()
console.log('cart item is', cartItem)
cartItem = await LineItem.findById(cartItem.id).populate('product')
res.render('products/checkout.ejs', {cartItem})
}
module.exports = {
 index,
 show,
 showSneakers,
 showDetail,
 addToCart
}