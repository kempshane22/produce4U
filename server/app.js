
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var addTestRouter = require('./routes/test');
var reservationRouter = require('./routes/reservation')
var postProductRouter = require('./routes/postProduct')
var signupRouter = require('./routes/signup')
var loginRouter = require('./routes/login')
var searchRouter = require('./routes/search')

var cors = require("cors");

var database = require("./database/database.js");


//initialize the database
database.init();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Add routes here
app.use('/', indexRouter);
app.use('/test', addTestRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/reservation',reservationRouter);
app.use('/postProduct', postProductRouter);
app.use('/Search', searchRouter);


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
  console.log(err)
});

module.exports = app;
