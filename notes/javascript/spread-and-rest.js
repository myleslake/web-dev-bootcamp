// Newer JS Features

// Spread and Rest -----------------------------------------------
// Spread used when invoking/calling a function (if on a function)
// Rest used when defining a function


// Spread in Function Calls
// Expands an iterable into a list of arguments
// Example: Same as calling Math.max(0, 1, 2)
const nums = [0, 1, 2];
//Math.max(nums); // NaN
Math.max(...nums); // works!

// Spread with Array Literals
// Spreading an array into a list of individual elements
// Example: Combine two arrays into one
const nums = [0, 1, 2];
const nums2 = [3, 4, 5];
const allNums = [...nums, ...nums2];
// Same as calling...
// const allNums = [0, 1, 2, 3, 4, 5];

// Spread in object literals
// Copies properties from one object into another 
// object literal
// Example: Copy properties from both into new object
// Order matters when they share a property
// Shared property will show value from last object
// that is passed in
const feline = { legs: 4, family: "Felidae" };
const canine = { color: black, family: "Candiae" };
const catDog = { ...feline, ...canine };

// Add properties and data from form object into a new object
const dataFromForm = {
    email: "fake@gmail.com",
    password: "qwerty"
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

// Arguments Object --------------------------------------
// Automatically collect all arguments when no params defined
// Like an array without array methods
function sum() {
    // arguments.length
    console.log(arguments);
}

// Example: arguments in this case is like [1, 2, 3], 
// but not a real array
sum(1, 2, 3);

// Rest Params ---------------------------------------------
// Used like params keyword in C#
// Example: Can use nums like arguments, except it will be
// an actual real array with access to array methods
function sum(...nums) {
    // nums.reduce  // yada yada
}

// Example: Can have named params first
function sum(firstParam, secondParam, ...nums) {

}