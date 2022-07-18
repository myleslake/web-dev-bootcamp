// Whatever index.js exports is what you will get when referencing an entire directory
const cat = require('./cat');
const dog = require('./dog');

const allPets = [cat, dog];

module.exports = allCats;