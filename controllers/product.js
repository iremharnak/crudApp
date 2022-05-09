const User = require('../models/user');
const product = require('../models/product')

function landing(req, res) {
  res.render('products/landing.ejs', { });
}


module.exports = {
 landing 
}