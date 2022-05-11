var express = require('express');
var router = express.Router();
const passport = require('passport');
const productCtrl = require('../controllers/product.js')

/* GET home page. */
router.get('/', productCtrl.index);


module.exports = router;
