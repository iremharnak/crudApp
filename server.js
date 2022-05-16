var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

// load the env vars
require('dotenv').config();

var app = express();

//connect to MongoDB with mongoose
require('./config/database');
// to run the passport code
require('./config/passport');

var indexRouter = require('./routes/index');
var lineItemsRouter = require('./routes/lineItems');
// var cartRouter = require('./routes/cart');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); 

//this function makes it easier to find with req.user instead of saying res.locals.user
app.use(function (req, res, next) {
  res.locals.user = req.user;
  console.log(res.locals.user, req.user, "this the app use user.")
  next();
  });

app.use('/products', require('./routes/products.js'))
app.use('/',lineItemsRouter);
// app.use('/cart', cartRouter);
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
