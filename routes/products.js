var express = require('express');
var router = express.Router();
const passport = require('passport');
const productCtrl = require('../controllers/product.js');

/* GET home page. */
router.get('/', productCtrl.index);
// sneakers index page
router.get('/sneakers', productCtrl.showSneakers)
//sneaker detail page
router.get('/sneakers/:id', productCtrl.showDetail)

// add to cart route
router.post('/add-to-cart', productCtrl.addToCart)
// render the cart page
router.get('/cart', productCtrl.displayCart)



module.exports = router;
