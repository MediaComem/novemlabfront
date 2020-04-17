const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('niveau1', getLocals({ contentClass: 'niveau1'}));
});

module.exports = router;
