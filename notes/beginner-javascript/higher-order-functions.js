// Higher Order Functions
// Functions that operate on/with other functions
// They can:
//  * Accept other funcions as arguments
//  * Return a function

// Pass function as argument
function callTwice(func) {
    func();
    func();
}

let rollDie = function() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);

// Return function
function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5){
        return function() {
            console.log("HAPPY");
        }
    } else {
        return function() {
            console.log("BAD");
        }
    }
}