var models  = require('../models');
var express = require('express');
var router  = express.Router();

//分页查询用户
router.get('/list/:size/:index', function(req, res) {
    let size=+req.params.size
    let index=+req.params.index
    //关系查询
    models.users.findAll({
        offset:index*size,
        limit:size,
        include:[{
            model:models.userroles,
            attributes:['name']
        },
        {
            model:models.userstates,
            attributes:['name']
        }]
    }).then(users=>{
        models.users.count().then(cnt=>{
            res.status(200).json(  {count:cnt,
                datas:users
            })
        })

       
    })
})

//修改用户
router.post("/update",(req,res)=>{    
    let user=req.body
    models.users.findOne(
        {where:{id:user.id}
    }).then(old=>{
        Object.assign(old,user)
        old.update(user).then(result=>{
            res.status(200).json({
                code:200,
                msg:'ok'
            })
        }).catch(e=>{
            res.status(200).json({
                code:500,
                msg:'fail',
                err:e
            })
        })
    })
})
//增加用户
router.post("/add",(req,res)=>{
    let user=req.body
    delete user.id
    console.log(user)
    models.users
    .create(user).then(result=>{
        res.status(200).json({
            code:200,
            msg:'ok'
        })
    }).catch(e=>{
        res.status(200).json({
            code:500,
            msg:'fail',
            err:e
        })
    })
})

//删除用户   /user/delete/id
router.get('/delete/:id', function(req, res) {
    let id=+req.params.id
    models.users.findOne({where:{id:id}}).then(old=>{
        old.destroy().then(result=>{
            res.status(200).json({
                code:200,
                msg:'ok'
            })
        }).catch(e=>{
            res.status(200).json({
                code:500,
                msg:'fail',
                err:e
            })
        })
    })
})
module.exports =  router;