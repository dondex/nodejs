const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth_blog",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.message);
    return;
  }

  console.log("Database Connected");
});

module.exports = connection;
