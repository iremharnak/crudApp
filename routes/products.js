var express = require('express');
var router = express.Router();

let productCtrl = require('../controllers/product.js')
/* GET home page. */
router.get('/', productCtrl.landing);

module.exports = router;
