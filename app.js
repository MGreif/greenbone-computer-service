const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const { errorHandler } = require('./errorHandler');
const { loggerMiddleware } = require('./config/logger');

const app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(loggerMiddleware)

app.use('/', indexRouter);

app.use(errorHandler)

module.exports = app;
