var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (err, data) {
            callback(err, data);
        });
    },
    insertOne: function (burgerName) {
        orm.insertOne('burgers', 'burger_name', 'devoured', burgerName, false);
    },
    updateOne: function (id) {
        orm.updateOne('burgers', 'devoured', true, 'id', id, );
    }
}
module.exports = burger;