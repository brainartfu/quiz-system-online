const mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "online_mern",
// });

var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "ViiOarPoxW",
  password: "7F8aBHgrAI",
  database: "ViiOarPoxW",
});

connection.connect(function (err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Connected To Database");
});

module.exports = connection;
