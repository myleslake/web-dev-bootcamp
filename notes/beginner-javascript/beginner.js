
// Primitive objects: Number, string, boolean, null, undefined


let msg = "I love cats";
let x = msg.indexOf(cat); // returns 7 for the start of the word cat // -1 if not found
let length = msg.length; // property returns string length
let y = msg.slice(2); // substring to return a new string starting at the index
let z = msg.slice(2, 5); // subtring with optional end parameter
let q = msg.replace("love", "hate"); // replace part of a string


// String Template Literals
// Similar to string interpolation in C# or f string in Python
let mylesMsg = `Myles said ${msg}.`; // Have to use back tick charaters for the string

// Undefined
// Javascript doesn't know or can't find what you're talking about

// Null
// What you're asking for is found, but it has no value


// Math object
Math.PI;
Math.round(2.999); // Round to 3
Math.floor(2.999999); // Chops off the .99999 and returns 2
Math.random(); // Returns a random number between 0 and 1, but not including 1


