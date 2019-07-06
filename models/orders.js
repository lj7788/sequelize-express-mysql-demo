/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orderdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'Id'
      }
    },
    totalprice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'orders'
  });
};
