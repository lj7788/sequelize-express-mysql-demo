/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    categoryid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categories',
        key: 'Id'
      }
    },
    unitprice: {
      type: "DOUBLE",
      allowNull: false
    },
    clicks: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    publisherid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'publishers',
        key: 'Id'
      }
    },
    publishdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    wordscount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    contentdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    aurhordescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    editorcomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    toc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'books',
    timestamps:false
  });
};
