var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var env = require('dotenv').config()
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exchangeRouter = require('./routes/exchange');

var Models = require("./models")
// start database
Models.sequelize.sync();

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/exchange', exchangeRouter);


module.exports = app;
