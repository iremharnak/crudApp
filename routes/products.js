var express = require('express');
var router = express.Router();
const passport = require('passport');
const productCtrl = require('../controllers/product.js')

/* GET home page. */
router.get('/', productCtrl.index);
router.get('/sneakers', productCtrl.showSneakers)



module.exports = router;
