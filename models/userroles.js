/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var userroles= sequelize.define('userroles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'userroles',
    timestamps:false
  });
  // roles.associate=models=>{
  //   models.userroles.hasMany(models.users)
  // }
  return userroles;
};
