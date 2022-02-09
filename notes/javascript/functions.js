// Function Basics
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Myles");

// Functions are hoisted and can be called before they're defined
// Not necessarily a best practice

function multiply(a, b) {
    return a * b;
}

let result = multiply(a, b);
console.log(result);