// Classes
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.hsl();
    }
    innerRgb() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}, `
    }
    rgb() {
        return `rbg(${this.innerRgb()})`;
    }
    rgba(a = 1.0) {
        return `rbg(${this.innerRgb()}, ${a})`;
    }
    hex() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl() {
        //do stuff
    }
}

const red = new Color(255, 0, 0);

// Use "extends" to implement inheritance in JS
class Dog extends Pet {
    eat() {// this method would override any method called eat in the Pet class

    }
}
class Cat extends Pet {
    constructor (name, age, livesLeft = 9){
        super(name, age)            // Calls the base constructor (JS users Super & Sub class for inheritance)
        this.livesLeft = livesLeft; // Only need to explicityly assign the members specific to Cat
    }
    // If no constructor is provider, the super constructor is automagically called
}