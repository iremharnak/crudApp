const User = require('../models/user');
const Product = require('../models/product');
const res = require('express/lib/response');

// showing the home page
function index(req, res, next) {
console.log('the logged in user is', req.user)
console.log(req.query)

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
  console.log(products, "Heshaaaam!")
  res.render('../views/products/sneakers.ejs', {
     products: products});
 }
module.exports = {
 index,
 show,
 showSneakers
}