var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  // models.Users.findAll({
  //   include: [ models.Task ]
  // }).then(function(users) {
  //   res.render('index', {
  //     title: 'Sequelize: Express Example',
  //     users: users
  //   });
  // });
  debugger
  //res.status(404).send({url: req.originalUrl + ' not found'})
  models.users.findAll().then(users=>{
    //   res.render('index', {
    //   title: 'Sequelize: Express Example',
    //   users: users
    // });
    res.status(200).json(users)
  })
});

module.exports =  router;
