var express = require('express');
var router = express.Router();
const passport = require('passport');
const productCtrl = require('../controllers/product.js')

/* GET home page. */
router.get('/', productCtrl.index);
// sneakers index page
router.get('/sneakers', productCtrl.showSneakers)
//sneaker detail page
router.get('/sneakers/:id', productCtrl.showDetail)

// add to cart route
router.post('/sneakers/:id/cart', productCtrl.addToCart)

// delete from cart
// router.delete('')
module.exports = router;
