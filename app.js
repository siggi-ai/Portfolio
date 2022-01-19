const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.get("/about", function(req, res) {
    res.render("about.ejs");
});

app.get("/webPages", function(req, res) {
    res.render("webPages.ejs");
});

app.get("/pictures", function(req, res) {
    res.render("pictures.ejs");
});

app.get("/contact", function(req, res) {
    res.render("contact.ejs");
});

app.get("/mondrian", function(req, res) {
    res.render("virtual-mondrian/mondrian.ejs");
});

app.get("/comic1", function(req, res) {
    res.render("comic1.ejs");
});

app.get("/comic2", function(req, res) {
    res.render("comic2.ejs");
});

app.get("/comic3", function(req, res) {
    res.render("comic3.ejs");
});

app.get("/auto", function(req, res) {
    res.render("auto.ejs");
});

app.get("/texte", function(req, res) {
    res.render("texte.ejs");
});

app.get("/text1", function(req, res) {
    res.render("text1.ejs");
});

app.get("/movies", function(req, res) {
    res.render("movie-page/index.ejs");
});

app.get("/movie1", function(req, res) {
    res.render("movie-page/movie1.ejs");
});

app.get("/movie2", function(req, res) {
    res.render("movie-page/movie2.ejs");
});

app.get("/movie3", function(req, res) {
    res.render("movie-page/movie3.ejs");
});

app.get("/movie4", function(req, res) {
    res.render("movie-page/movie4.ejs");
});

app.get("/movie5", function(req, res) {
    res.render("movie-page/movie5.ejs");
});

app.get("/movie6", function(req, res) {
    res.render("movie-page/movie6.ejs");
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});