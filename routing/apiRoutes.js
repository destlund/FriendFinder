

// a GET route with the url /api/friends
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // a POST route /api/friends that handles the compatibility logic
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        res.json(true);
    });
};


