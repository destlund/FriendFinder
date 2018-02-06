// require the required modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// we're using an express server
var app = express();

// setting up a port
var PORT = process.env.PORT || 8080;

// getting express ready to parse data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// get the routing scripts up and running
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// set up the friends array
var friends = [];
function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    friends.push(this)
}
var Ahmed = new Friend("Ahmed", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg", [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
var David = new Friend("David", "myUrl", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);


// set up a server 
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
