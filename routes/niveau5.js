const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('niveau5', getLocals({ contentClass: 'niveau5' }));
});

module.exports = router;
