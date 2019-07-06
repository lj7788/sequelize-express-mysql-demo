var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get("/list/:size/:index",(req, res)=>{
    let size=+req.params.size
    let index=+req.params.index
    models.books.findAll({
        offset:index*size,
        limit:size
    }).then(books=>{
        res.status(200).json(books)
    })
})
module.exports =  router;
