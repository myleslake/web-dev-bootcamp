// Newer JS Features

// Destructuring -------------------------------------------
// Short, clean syntax to 'unpack' values form arrays or 
// properties from objects into distinct variables
// After destructuring used like regular variables
// Faster way of doing individual variable assignment

// Destructuring Arrays
// Order matters because of index
const raceResults = ["Flash Gordon", "Speedy Gonzalez", "Mach 5"];
const [gold, silver, bronze] = raceResults;
// In this case: gold = Flash Gordon, silver = "Speedy Gonzalez", and bronze = "Mach 5"

const [fastest, ...everyoneElse] = raceResults;
// In this case: fastest = "Flash Gordon", and everyoneElse = ["Speedy Gonzalez", "Mach 5"]

// Destructuring Objects
// Order does not matter, uses object variable names
// Can rename variables with syntax propName : newName
// Can use default values for variables
const runner = {
    firstName: "Flash",
    lastName: "Gordon",
    country: "USA",
    time: 9.86,
    medal: "gold"
}

const { firstName, lastName, country } = runner;
// const { firstName : runnerFirstName, lastName : runnerLastName, country } = runner; // Example: variables renamed
// const { firstName, lastName, country = "USA" } = runner; // Example: default value of USA for country

// Destructuring Params
// Can destructure param on the way in
// Example: 
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

// Example: Non-destructured version of the same thing
function fullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

