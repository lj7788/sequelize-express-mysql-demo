/* jshint indent: 2 */
'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
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
    timestamps:false
  });
};
