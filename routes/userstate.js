var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/list', function(req, res) {
    models.userstates.findAll().then(states=>{
        res.status(200).json(states)
    })
})

module.exports =  router;