// var keyword is scoped to functions, but not to blocks
// let & const keywords have block scope

// Function Scope
let bird = "Bluebird";

function sayBird() {
    let bird = "Cardinal";
    console.log(bird);
}

sayBird();          // prints Cardinal
console.log(bird);  // prints Bluebird

// Block Scope
let radius = 8;

if(radius < 10) {
    const PI = 3.14;
}

 console.log(radius); // works
console.log(PI);      // PI undefined outside of block

// Lexical Scope
// An inner functino nested inside a parent function has access
// to the parents variables

function bankRobbery() {
    let hero = "Spiderman";
    function cryForHelp() {
        console.log(`HELP US ${hero}!`); // Access to parent variable
    }
    cryForHelp();
}
bankRobbery();