const express = require("express");
const path = require("path");

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});