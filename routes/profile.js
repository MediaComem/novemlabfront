const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.route('/').get(function(req, res) {
    res.status(200).render('profile', getLocals({ localBackground: "backgroundObjectsFlying2", contentClass: 'profile' }));
});

module.exports = router;
