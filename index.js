const express = require("express");
const mysql = require("mysql2");
const app = express();

const mysql_conn = mysql.createConnection({
  host: "localhost",
  user: "ax07057",
  password: "an003722",
  database: "steingartp",
});

app.listen(9750, () => {
  console.log("Server is running on 9750");
});

app.get("/", function (req, res) {
  res.send("Hello from NODE API, with nodemon");
  console.log("MYSQL CONNECTION:");
  console.log(mysql_conn);
});
