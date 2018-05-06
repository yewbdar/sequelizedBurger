var mysql = require("mysql");

var dbConnection;
console.log('connection File');

if(process.env.JAWSDB_URL){

    dbConnection=mysql.createConnection(process.env.JAWSDB_URL)
    console.log(" halluuuu1 " + dbConnection);
    console.log("hello 2 " + process.env.JAWSDB_URL);

}

else{
 dbConnection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "burgers_db"
    
});
}

dbConnection.connect(function (err) {
    if (err) {
        console.log("error connection: " + err.stack)
        return;
    }
    else {
        console.log("connected as id :" + dbConnection.threadId)
    }
})
module.exports=dbConnection;