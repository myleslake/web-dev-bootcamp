// Basics
// Key-value pairs
// Every key is turned into a string behind the scenes
const movie = {
    title: "The Bourne Identity",
    length: 90,
    actors: ["Matt Damon", "Rhonda Rousey", "Austin Powers"]
};

let movieTitle = movie.title;
let movieTitleAgain = movie["title"];

movie.title = "Shrek";