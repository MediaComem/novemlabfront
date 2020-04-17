const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('niveau6', getLocals({ contentClass: 'niveau6' }));
});

module.exports = router;
