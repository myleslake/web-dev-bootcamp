
// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

// For...of loop
// Newer to JS
// Loop over collection
// NOT supported in IE
const myItems = [];
for (let item of myItems) {
    console.log(item);
}

// For...in loop
// Loop over object keys
const testScores = {
    keenan: 90,
    michael: 87
};

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// JS Object
Object.keys(testScores); // Returns array of all keys in the object
Object.values(testScores); // Returns array of all values in the object

let total = 0;
let scores = Object.values(testScores);

for (let score of scores) {
    total += score;
}

console.log(total / scores.length);