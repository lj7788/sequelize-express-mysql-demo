/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookratings', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bookid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'books',
        key: 'Id'
      }
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'Id'
      }
    },
    rating: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bookratings'
  });
};
