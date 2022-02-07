// 'this' Keyword
// Use 'this' keyword to access properties on the same object
// Cannot access object properties within object without 'this' keyword
const person = {
    firstName : "Myles",
    lastName : "Lake",
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

// The value of 'this' can change and it depends on the 
// invocation context of the function it is used in

// 'this' does not refer to person object here
// Refers to fullname object so it does not have the
// first and last name properties
// 'this' will refer to the "Window" object, which is 
// the top level object in the browser
const person2 = person.fullName();



