const User = require('../models/user');
const Product = require('../models/product');
const LineItem = require('../models/lineItem');
const res = require('express/lib/response');


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
  //add the logged user id to a new 'shopper' property to that obj
  newItem.shopper = req.user.id,
  //create new LineItem in the database using newItem & returns that to the newItem variable
  newItem =await LineItem.create(newItem)
  console.log("My new Item is: ", newItem)
  res.send("check it out")
}

module.exports = {
  index,
  showSneakers,
  showDetail,
  addToCart
}