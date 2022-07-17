// Methods
// A method is a function that is the property of an object

const myMath = {
    PI : 3.14159,
    add : function(x, y) {
        return x + y;
    },
    subtract : function(x, y) {
        return x - y;
    }
};

let total = myMath.add(2, 2);

// Shorthand for the same thing
// Works exactly the same way
const myOtherMath = {
    PI : 3.14159,
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    }
};

let sum = myOtherMath.add(2, 2);