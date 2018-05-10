// 'use strict';
module.exports = (sequelize, DataTypes) => {
  var burger = sequelize.define('burger', {
    burger_name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    devoured:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },
    customerId:{
      type:DataTypes.INTEGER
    }
  }, {});
  burger.associate = function(models) {
    // burger belongsTo custumer
    burger.belongsTo(models.customer);
  };
  return burger;
};