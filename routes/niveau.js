const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.route('/:id').get(function(req, res) {
    var localBackground = "";
    var niveauNum = parseInt(req.params.id,10);

    if(niveauNum === 1 || niveauNum === 4){
        localBackground = "backgroundLaptopFlying";
    }
    if(niveauNum === 2 || niveauNum === 5){
        localBackground = "backgroundObjectsFlying";
    }
    if(niveauNum === 3 || niveauNum === 6){
        localBackground = "backgroundObjectsFlying2";
    }
    res.status(200).render('niveau' + req.params.id, getLocals({ localBackground, contentClass: 'niveau' + req.params.id, fullHost: req.protocol + '://' + req.get('host') }), function(err, result){
        if (err) {
            res.redirect('/404'); // File doesn't exist
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
