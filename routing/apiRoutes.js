

// a GET route with the url /api/friends
module.exports = function (app) {

    // set up the friends array
    //throw some sample data in the array
    var friends = [{
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    },
    {
        name: "Awad",
        photo: "https://avatars2.githubusercontent.com/u/31256866?s=460&v=4",
        scores: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    }];


    // just spits out json of the whole friends list
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // a POST route /api/friends that handles the compatibility logic
    app.post("/api/friends", function (req, res) {

        res.json(true);
        friends.push(req.body);
        console.log(friends);

        // here's where it gets tricksy with the compatability logic:
        var myIndex = friends.length - 1;
        var myData = friends[myIndex];
        var compatabilityData = [];
        var compatabilityScores = [];
        for (i = 0; i < myIndex; i++) {
            var thisFriendScores = friends[i].scores
            for (int = 0; int < myData.scores[int]; int++) {
                var compatabilityPoint = parseInt(thisFriendScores[int]) - parseInt(myData.scores[int]);
                compatabilityData.push(compatabilityPoint);
                console.log(compatabilityPoint + '/n' + myData.scores[int]);
            }

            // getting the sum is hard
            var compatabilityScore = Math.abs(compatabilityData.reduce(add, 0));

            // this gets reduce to add up all the scores
            function add(a, b) {
                return a + b;
            }

            // var compatabilityScore = Math.abs(.sum(compatabilityData));
            compatabilityScores.push(compatabilityScore);
            compatabilityData = [];
        }
        console.log(compatabilityScores);

        //
    });
};


