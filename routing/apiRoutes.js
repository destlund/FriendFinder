

// a GET route with the url /api/friends
module.exports = function (app) {
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

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // a POST route /api/friends that handles the compatibility logic
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        res.json(true);
        console.log(friends);

        // here's where it gets tricksy with the compatability logic:
        var myIndex = friends.length - 1;
        var myData = friends[myIndex];
        var compatibilityData = [];
        var compatabilityScores = [];
        for (i = 0; i < myIndex; i++) {
            for (n = 0; n < myData.scores[n]; n++) {
                var compatabilityPoint = friends[i].scores[n] - myData.scores[n];
                compatabilityData.push(compatabilityPoint);
            }
            var compatabilityScore = Math.abs(sum(compatabilityData));
            compatabilityScores.push(compatabilityScore);
        }
        console.log(compatabilityScores);
    });
};


