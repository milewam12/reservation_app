var express = require("express");
var app= express();
var bodyParser = require("body-parser");
var path = require("path");


var PORT = process.env.PORT || 3000;

// boilerplate for app.use
app.get("/", function (request, res) {
    res.send("some text");
})


app.listen(PORT, function () {
    console.log("listening on " + PORT)
});