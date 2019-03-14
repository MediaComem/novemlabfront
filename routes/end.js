var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.route('/').get
(function(req, res) {
        res.status(200).render('end');
});

module.exports = router;