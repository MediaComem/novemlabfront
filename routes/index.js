const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('niveau0_cover', getLocals({ localBackground: 'inverted coverBackground', contentClass: 'cover' }));
});

module.exports = router;
