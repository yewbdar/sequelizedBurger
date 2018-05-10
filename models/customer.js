'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    name: DataTypes.STRING
  }, {});
  customer.associate = function(models) {
    // customer hasmany burgers
    customer.hasMany(models.burger);
  };
  return customer;
};