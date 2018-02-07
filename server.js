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



// set up a server 
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
