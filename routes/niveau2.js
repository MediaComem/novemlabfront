const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('niveau2', getLocals({ contentClass: 'niveau2' }));
});

module.exports = router;
