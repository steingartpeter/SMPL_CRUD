const express = require("express");
const app = express();

app.listen(9750, () => {
  console.log("Server is running on 9750");
});

app.get("/", function (req, res) {
  res.send("Hello from NODE API, with nodemon");
});
