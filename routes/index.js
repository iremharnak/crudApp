var express = require('express');
var router = express.Router();
const passport = require('passport')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
    successRedirect : '/products',
    failureRedirect : '/products'
  }
));

// OAuth logout route, this will delete the cookie
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/products');
});

module.exports = router;
