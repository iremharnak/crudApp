var express = require('express');
var router = express.Router();
const passport = require('passport');
const lineItemCtrl = require('../controllers/lineItem.js')
// delete from cart
router.delete('/lineItem/:id', lineItemCtrl.deleteItem)



module.exports = router;