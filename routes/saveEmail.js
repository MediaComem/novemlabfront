const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.route('/').get(function(req, res) {
    res.status(200).render('saveEmail', getLocals({ localBackground: 'inverted' }));
});

module.exports = router;
