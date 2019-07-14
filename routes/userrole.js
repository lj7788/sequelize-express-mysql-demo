var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/list', function(req, res) {
    models.userroles.findAll().then(roles=>{
        res.status(200).json(roles)
    })
})

module.exports =  router;