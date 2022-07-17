// Array Methods

// forEach method ---------------------------------------------------
// Accepts a callback function
// Calls the function once per element in the array
// More commonly used before js added 'for of' loop
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (num) {
    console.log(num * num);
});

// Can pass in named function, but less common
function print(num) {
    console.log(num * num);
}
numbers.forEach(print);

// Newer way of doing same thing
// More common recently
for (let num of numbers) {
    console.log(num * num);
}

// map Method ---------------------------------------------------
// Creates a new array with the results of calling a callback
// on every element in the array
// Doesn't mutate original array
// Example: Creates a new array with each number double the
//          value in the original array
const doubles = numbers.map(function (num) {
    return num * 2;
});

// Same thing written as an arrow function
const doubles = numbers.map((num) => {
    return num * 2;
});

// Same thing written as a one line arrow function
// with an implicit return
const doubles = numbers.map(num => num * 2);

// setTimeout and setInterval functions ---------------------
// Not array methods, but take a callback param

// setTimeout
// Takes a callback function and an interval in ms
// Code after this will still be executed and this won't 
// be called until 3s later (async?)
// Example: 
setTimeout(() => {
    console.log("...are you still there?")
}, 3000);

// setInterval
// Similar to timeout, but reoccurs every interval until
// the interval is cleared
const id = setInterval(() => {
    console.log(Math.random())
}, 3000);

clearInterval(id);

// filter Method -------------------------------------------------
// Very similar C# LINQ .Where
// Creates a new array with all elements that pass the test 
// implemented by the provided function
// Callback function needs to be a boolean function
// If callback returns true, the array item is added to the new 
// filtered array
// Example: 
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = nums.filter(n => {
    return n % 2 == 1;
});

// Same thing with one liner and implicit return
// This example ends up like .Where in C#
const odds = nums.filter(n => n % 2 == 1);

// Combining Methods
// Can indent the chained together methods similar to how we
// do LINQ in C#
const squaredOdds = nums.filter(n => n % 2 == 1).map(n => n * n);

// some Method ----------------------------------------------------
// Returns true if ANY of the array elements pass the test function
// C# .Any / .Contains
// Example: 
const hasTwo = nums.some(n => n == 2);

// every Method
// Returns true if ALL of the array elements pass the test function
// C# .All
// Example: 
const hasOnlyOddNumbers = nums.every(n => n % 2 == 1);

// reduce Method -------------------------------------------------
// Executes a reducer function on each element of the array
// resulting in a single value
// Example: Summing all items in an array
// accumulator represents the sum
// Whatever is returned will be used as next iterations accumulator
// currentValue represents the current value in the array being
// iterated over
const numbers = [3, 5, 7, 9, 11];
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

// Example: Same concept, but using implicit return
// to shorten syntax
const prices = [9.99, 4.95, 3.99, 4.00];
let totalPrice = prices.reduce((total, price) => total + price);

// Example: Find lowest value in array
let minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

// Example: Working with objects
movies = [
    {
        title: "Bourne Identity",
        rating: 100,
        year: 2002
    }
];

bestMovie = movies.reduce((highestRatedMovie, currentMovie) => {
    if (currentMovie.rating > highestRatedMovie.rating) {
        return currentMovie.rating;
    }
    return highestRatedMovie.rating;
});





