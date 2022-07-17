// Newer JS Features

// Default Params ---------------------------------------
// Similar to C# default params
// Default params should be last // Order matters
// Example: 
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// Example: Old way of doing same thing
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1;
}