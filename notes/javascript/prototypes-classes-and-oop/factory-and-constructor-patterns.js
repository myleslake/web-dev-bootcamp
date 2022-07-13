// Factory Pattern
// Factory Function - Function that returns an instance of an object
// One way to do it, but factory pattern less used. Use constructor pattern instead
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb =  function() {
        const {r, g, b} = this;
        return `rbg(${r}, ${g}, ${b})`;
    };
    color.hex = function(){
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
}

let red = makeColor(255, 0, 0);
console.log(red.rgb());

// Constructor Pattern
// Uses new operator
// Functions are defined on the prototype
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// Define functions here to add them to the prototype
// instead of the instance of the object
Color.prototype.rgb =  function() {
    const {r, g, b} = this;
    return `rbg(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function(){
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
Color.prototype.rgb =  function(a = 1.0) {
    const {r, g, b} = this;
    return `rbg(${r}, ${g}, ${b}, ${a})`;
};

let black = new Color(0, 0, 0);
console.log(black);