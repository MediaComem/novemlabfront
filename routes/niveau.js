const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.route('/:id').get(function(req, res) {
    res.status(200).render('niveau' + req.params.id, getLocals({ contentClass: 'niveau' + req.params.id }), function(err, result){
        if (err) {
            res.redirect('/404'); // File doesn't exist
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
