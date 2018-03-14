var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.route('/').get
(function(req, res) {
    console.log(req.params.id);
        res.status(200).render('save');
});

module.exports = router;