var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.route('/:id').get
(function(req, res) {
    console.log(req.params.id);
        res.status(200).render('niveau'+req.params.id);
});

module.exports = router;