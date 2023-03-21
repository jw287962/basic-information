const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get("/index", function (req, res) {
  res.render("index");
});
app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact-me", function (req, res) {
  res.render("contact-me");
});

app.get("/", function (req, res) {
  res.render("index");
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});