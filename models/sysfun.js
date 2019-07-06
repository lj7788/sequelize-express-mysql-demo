/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysfun', {
    nodeid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    displayname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    parentnodeid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'sysfun'
  });
};
