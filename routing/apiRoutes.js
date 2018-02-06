// a GET route with the url /api/friends


// a POST route /api/friends that handles the compatibility logic


// a constructor for the array of friends
var friends = [];
function Friend(name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    friends.push(this)
}

var Ahmed = new Friend("Ahmed", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg", [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
var David = new Friend("David", "myUrl", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(Ahmed);

console.log(friends);