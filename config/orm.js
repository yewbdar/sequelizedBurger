console.log('WE ARE HERE');
var connection = require("./connection.js");

var orm = {

    selectAll: function (table, callback) {
        var quary = "SELECT * FROM ??";
        connection.query(quary, [table], function (err, data) {
            if (err) {
                callback(err, null);
            }
            callback(null, data);
        });
    },
    insertOne: function (table, col1, col2, val1, val2) {

        let query = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(query, [table, col1, col2, val1, val2], function (err) {
            if (err) throw err;
        });
    },
    updateOne: function (table, col1, val1, col2, val2) {
        // console.log(">>>>>>>>>>",table, col1, val1, col2, val2)
        let query = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
        connection.query(query, [table, col1, val1, col2, val2], function (err) {
            if (err) throw err;
        });
    }
}
module.exports = orm;