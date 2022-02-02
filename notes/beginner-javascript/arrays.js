// Basics
let empty = []; // initialize empty array
let colors = ["red", "white", "blue"];

// don't have to store same data type, but not best practice
let stuff = ["cat", true, 0, null]; 

// get values in array
let red = colors[0];
let white = colors[1];

let nope = colors[4]; // undefined when out of range of array

colors[2] = "purple"; // change one of the values in array

let len = colors.length;
colors[len] = "blue"; 

// Array methods
// push     // pop
// shift    // unshift
// concat
// includes
// indexOf
// reverse
// slice
// splice
// sort



let movies = [
    "The Bourne Identity",
    "Shrek",
    "Star Wars",
    "The Grinch"
];

// Add item to the end of array
movies.push("The Book of Eli");
// Return and remove the last item of the array
let theBookOfEli = movies.pop();

// Add item to beginning of array
movies.unshift("Bad Santa");
// Remove item from the beginning of array
let badSanta = movies.shift();

// Concatenate arrays
let colorsMovies = colors.concat(movies);

// Determine if array includes a particular value
let isGoodMovieList = movies.includes("Shrek");

// Find index of item in an array // -1 if not present
let shrekIndex = movies.indexOf("Shrek");

// Reverse array
movies.reverse();

// Return a copy of a section of an array // original array unchanged
let section = movies.slice(1, 3);     // movies.slice(3) will use 0 as the starting index

// Arrays are references types and can't be compared with == or ===

// With arrays, const can be used and the values of the array can 
// be changed, but a new array cannot be assigned to the variable