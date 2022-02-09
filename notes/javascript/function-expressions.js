// Functinons are values in JS.
// They can be stored and passed around to other functions
// as an argument or returned froma function
// JS treats functions like any other value


// Function statement 
function add(a, b) {
    return a + b;
}

// Function expression
// Storing a function with no name in a variable
// Behaves same as function statement
const add = function(a, b) {
    return a + b;
}

// Called with name of variable
add(1,2);

