// Modules
// When referencing a file use ./ to specify it's in the same directory
// Don't specify file type
// Have to specify the items to be exported in the required file
const math = require('./math');
console.log(math.square(9));

// Can destructure also instead of taking the whole object
const {add, square} = require('./math');
console.log(add(2, 2));

// -------------------------------
// Can require an entire directory
// When requiring an entire directory, node looks for a file called index.js in the directory
const pets = require('./pets');
