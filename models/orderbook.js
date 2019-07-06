/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderbook', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orderid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'orders',
        key: 'Id'
      }
    },
    bookid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    unitprice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'orderbook'
  });
};
