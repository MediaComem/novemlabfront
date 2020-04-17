const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const niveau1 = require('./routes/niveau1');
const niveau2 = require('./routes/niveau2');
const niveau3 = require('./routes/niveau3');
const niveau4 = require('./routes/niveau4');
const niveau5 = require('./routes/niveau5');
const niveau6 = require('./routes/niveau6');
const niveauF = require('./routes/niveauF');
const end = require('./routes/end');
const save = require('./routes/save');
const profile = require('./routes/profile');
const { configureApiProxy, getLocals } = require('./utils');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//controllers.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/n1', niveau1);
app.use('/n2', niveau2);
app.use('/n3', niveau3);
app.use('/n4', niveau4);
app.use('/n5', niveau5);
app.use('/n6', niveau6);
app.use('/nF', niveauF);
app.use('/save', save);
app.use('/profile', profile);
app.use('/end', end);

configureApiProxy(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
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
    res.render('error', getLocals());
});

module.exports = app;
