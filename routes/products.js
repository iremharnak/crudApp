var express = require('express');
var router = express.Router();
const passport = require('passport');
const productCtrl = require('../controllers/product.js')

/* GET home page. */
router.get('/', productCtrl.index);
// handle the URL that our login btn will point to
// passport will take the user to the consent screen


// OAuth logout route, this will delete the cookie
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/major');
});
module.exports = router;
