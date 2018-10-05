// IMPORTING DEPENDENCIES
require('dotenv').config() 
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// CONNECTING DATABASE
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');
});
// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

// INSTANTIATING EXPRESS AND ADDING MIDDLEWARE
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
