var path = require("path")

module.exports = function (app) {

    // a GET route to /survey that displays the survey page
    app.get("/survey/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // a USE route that leads to home.html and displays the home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

