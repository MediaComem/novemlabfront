var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var niveau1 = require('./routes/niveau1');
var niveau2 = require('./routes/niveau2');
var niveau3 = require('./routes/niveau3');
var niveau4 = require('./routes/niveau4');
var niveau5 = require('./routes/niveau5');
var niveau6 = require('./routes/niveau6');
var niveau7 = require('./routes/niveau7');
var niveauF = require('./routes/niveauF');
var save = require('./routes/save');
var profile = require('./routes/profile');
//var Chart = require('chart.js');
var app = express();
var proxy = require('express-http-proxy');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//controllers.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/welcome', niveau1);
app.use('/n2', niveau2);
app.use('/n3', niveau3);
app.use('/n4', niveau4);
app.use('/n5', niveau5);
app.use('/n6', niveau6);
app.use('/n7', niveau7);
app.use('/nF', niveauF);
app.use('/save', save);
app.use('/profile', profile);
app.use('/api-proxy', proxy(process.env.PROXY_URL || 'localhost:3000'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
