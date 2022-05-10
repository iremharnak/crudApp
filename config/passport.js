const passport = require('passport');
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
  //is it a new user or someone who's logged in b4? if they're new, add them into the database
  User.findOne({ 'googleId': profile.id }, function(err, user) {
    if (err) return cb(err);
    if (user) {
      return cb(null, user);
    } else {
      // we have a new user via OAuth!
      var newUser = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id
      });
      newUser.save(function(err) {
        if (err) return cb(err);
        return cb(null, newUser);
      });
    }
  });
}
));

//what to put in the cookie
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
//this helps create req.user variable if a logged-in user is making requests, if a non-logged in user makes request req.user will be undefined...and will be available to all controllers when you're rendering: res.render('something.ejs', {user:req.user})
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});