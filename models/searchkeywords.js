/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('searchkeywords', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    keyword: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    searchcount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'searchkeywords'
  });
};
