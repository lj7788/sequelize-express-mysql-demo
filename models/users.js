/* jshint indent: 2 */
'use strict';
var userroles = require('./userroles');
module.exports = function(sequelize, DataTypes) {
  let users= sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    userstateid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'userstates',
        key: 'Id'
      }
    },
    isonline: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loginid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    loginpwd: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userroleid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'userroles',
        key: 'id'
      }
    },
    gender: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'users',
    timestamps:false,
    initialAutoIncrement:'1000'
  });
  
  //ORM中关系映射
  users.associate=(models)=>{
    models.users.belongsTo(models.userroles,{foreignKey:'userroleid'})
    models.users.belongsTo(models.userstates,{foreignKey:'userstateid'})
  }

  return users
};
