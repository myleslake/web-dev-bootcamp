// Factory Pattern
// One way to do it, but factory pattern less used. Use constructor pattern instead.
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

console.log(makeColor(255, 145, 145));

// Constructor Pattern