const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("express");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.get("/about.html", function (req, res) {
    res.sendFile(__dirname + "/about.html")
});

app.get("/menu.html", function (req, res) {
    res.sendFile(__dirname + "/menu.html")
});

app.get("/orders.html", function (req, res) {
    res.sendFile(__dirname + "/orders.html")
});

app.get("/contact.html", function (req, res) {
    res.sendFile(__dirname + "/contact.html")
});

app.get("/search.html", function (req, res) {
    res.sendFile(__dirname + "/search.html")
});

app.get("/checkout.html", function (req, res) {
    res.sendFile(__dirname + "/checkout.html")
});

app.get("/cart.html", function (req, res) {
    res.sendFile(__dirname + "/cart.html")
});

app.get("/profile.html", function (req, res) {
    res.sendFile(__dirname + "/profile.html")
});

app.get("/login.html", function (req, res) {
    res.sendFile(__dirname + "/login.html")
});

app.get("/register.html", function (req, res) {
    res.sendFile(__dirname + "/register.html")
});

app.get("/script.js", function (req, res) {
    res.sendFile(__dirname + "/script.js")
});

app.get("/update_address.html", function (req, res) {
    res.sendFile(__dirname + "/update_address.html")
});

app.get("/update_profile.html", function (req, res) {
    res.sendFile(__dirname + "/update_profile.html")
});

app.listen(3000, function (req, res) {
    console.log("Server is runnning on port 3000.");
});