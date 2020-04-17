const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('niveau3', getLocals({ contentClass: 'niveau3' }));
});

module.exports = router;
