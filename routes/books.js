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
        models.books.count().then(cnt=>{
            res.status(200).json({
                count:cnt,
                datas:books
            })
        })
        
    })
})
module.exports =  router;
