const User = require('../models/user');

// show profile page
async function showShopper(req, res) {
  if (!req.user) {
    res.redirect('/products')
  }
  let customer = await User.findById(req.user.id);
  res.render('../views/profile.ejs', { customer });
}


module.exports = {
  showShopper
}