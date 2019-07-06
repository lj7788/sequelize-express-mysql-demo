/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userwen', {
    id: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'userwen'
  });
};
