const express = require("express");
const mysql = require("mysql2");
const app = express();

const mysql_conn = mysql.createConnection({
  host: "localhost",
  user: "ax07057",
  password: "an003722",
  database: "steingartp",
});

mysql_conn.query("SELECT * FROM steingartp.calendar WHERE rec_date = CURDATE();", (err, results, fields) => {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

app.listen(9750, () => {
  console.log("Server is running on 9750");
});

app.get("/", function (req, res) {
  res.send("Hello from NODE API, with nodemon");
});
