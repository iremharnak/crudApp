var express = require('express');
var router = express.Router();
const passport = require('passport');
const productCtrl = require('../controllers/product.js')

/* GET home page. */
router.get('/', productCtrl.landing);
// handle the URL that our login btn will point to
// passport will take the user to the consent screen
router.get("/auth/google", passport.authenticate(
  "google", {
      scope : ["profile", "email"],
      prompt : "select_account" // This will force the user to select an account
 }
))
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route, this will delete the cookie
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
module.exports = router;
