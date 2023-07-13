const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 2080;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.type("text/html");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  console.log("서버 켜짐");
});
