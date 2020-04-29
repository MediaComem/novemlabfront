const express = require('express');
const { getfullHost, getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('niveau0_cover', getLocals({ localBackground: 'inverted backgroundCover', contentClass: 'cover', fullHost: req.protocol + '://' + req.get('host') }));
});

module.exports = router;
