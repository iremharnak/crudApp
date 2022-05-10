const User = require('../models/user');
const Product = require('../models/product')

function index(req, res, next) {
console.log('the logged in user is', req.user)
console.log(req.query)

  res.render('products/landing.ejs', {
    User,
    user: req.User,
    name:req.query.name});
}


module.exports = {
 index
}