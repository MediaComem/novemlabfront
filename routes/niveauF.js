const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.route('/:id').get(function(req, res) {
    res.status(200).render('niveau'+req.params.id, getLocals());
});

module.exports = router;