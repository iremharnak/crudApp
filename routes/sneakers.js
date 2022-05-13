var express = require('express');
var router = express.Router();

const sneakerCtrl = require('../controllers/sneaker.js')

/* GET home page. */
router.get('/sneakers', sneakerCtrl.showSneakers);


module.exports = router;
