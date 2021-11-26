const express = require("express");
const path = require("path");

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.get("/works", function(req, res) {
    res.render("works.ejs");
});

app.get("/picture", function(req, res) {
    res.render("picture.ejs");
});

app.get("/contact", function(req, res) {
    res.render("contact.ejs");
});

app.get("/movies", function(req, res) {
    res.render("movie-page/index.ejs");
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});