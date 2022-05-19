var express = require('express');
var router = express.Router();
const passport = require('passport');
const shopperCtrl = require('../controllers/shopper.js');

// profile page show
router.get('/', shopperCtrl.showShopper)

module.exports = router;