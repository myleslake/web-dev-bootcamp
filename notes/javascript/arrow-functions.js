// Arrow Functions
// Syntactically compact alternative to a regular
// function expression
// Omit 'function' keyword before parameters and add
// => (the arrow) after parameters
// Parentheses are options with only one parameter
// Example:
const square = x => {
    return x * x;
};

const sum = (x, y) => {
    return x + y;
};

// Original way of writing the same thing
const square = function(x) {
    return x * x;
};

const sum = function(x, y) {
    return x + y;
};

// No params syntax
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// Syntax for implicit return
// No return keyword required
// Replace curly brackets with parentheses
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1 // no semicolon?
);

// One line syntax with implicit return
const sum = (x, y) => x + y

// 'this' Keyword
// Inside an arrow function, 'this' keyword refers to the scope
// that it was created in. In this instance that is the Window object
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}` 
    },
    badFullName: () => {
        return `${this.firstName} ${this.lastName}` // Error: 'this' undefined
    },
    shoutName: function () {
        setTimeout(function() { // setTimeout is a method on Window object
            console.log(this.fullName()) // Error: this refers to Window
        }, 3000)
    },
    yellName: () => {           // Works
        setTimeout(function() { // Now keyword 'this' is the same as it is
            console.log(this.fullName()) // for the nested function
        }, 3000)
    }
};