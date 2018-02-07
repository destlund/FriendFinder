

// a GET route with the url /api/friends
module.exports = function (app) {

    // set up the friends array
    //throw some sample data in the array
    var friends = [{
        name: "Ahmed",
        photo: "http://pixel.nymag.com/imgs/daily/vulture/2015/04/29/29-amy-schumer.w1200.h630.jpg",
        scores: ['2', '1', '2', '3', '4', '5', '4', '5', '4', '2']
    },
    {
        name: "Awad",
        photo: "http://pixel.nymag.com/imgs/daily/vulture/2015/04/29/29-amy-schumer.w1200.h630.jpg",
        scores: ['0', '1', '2', '3', '4', '5', '3', '2', '3', '3']
    }];


    // just spits out json of the whole friends list
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // a POST route /api/friends that handles the compatibility logic
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        console.log(friends);
        var resultData;

        // here's where it gets tricksy with the compatability logic:
        var myIndex = friends.length - 1;
        var myData = friends[myIndex];
        var compatabilityData = [];
        var compatabilityScores = [];
        for (i = 0; i < myIndex; i++) {
            var thisFriendScores = friends[i].scores
            for (int = 0; int < 10; int++) {

                // console.log('Tallying scores \n' + thisFriendScores + ' \n ' + myData.scores);
                var compatabilityPoint = (parseInt(thisFriendScores[int]) - parseInt(myData.scores[int]));
                //no negative distances in taste -- how much we have in common is absolute
                compatabilityData.push(Math.abs(compatabilityPoint));
                // console.log(myData.scores[int] + ' - ' + myData.scores[int] + ' = ' + compatabilityPoint);
            };

            // getting the sum is hard
            var compatabilityScore = compatabilityData.reduce(add, 0);

            // this gets reduce to add up all the scores
            function add(a, b) {
                return a + b;
            };
            console.log(compatabilityScore)
            // var compatabilityScore = Math.abs(.sum(compatabilityData));
            compatabilityScores.push(compatabilityScore);
            compatabilityData = [];
        }

        // now to grab the lowest score--it's like golf!

        function indexOfSmallest(a) {
            var lowest = 0;
            for (var i = 1; i < a.length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            return lowest;
        }
        console.log(indexOfSmallest(compatabilityScores));
        console.log(friends[indexOfSmallest(compatabilityScore)]);

        resultData = (friends[indexOfSmallest(compatabilityScores)]);
        res.json(resultData);
    });
};


