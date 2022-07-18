const add = (x, y) => x + y;
const square = x => x * x;

// Can export items individually
// module.exports.add = add;
// module.exports.square = square;

// Can replace module.exports entirely
// const math = {
//     add: add,
//     square: square
// };

// module.exports = math;

// Shorter syntax can be used for module.exports as long
// as no variables are named exports
exports.add = add;
exports.square = square;