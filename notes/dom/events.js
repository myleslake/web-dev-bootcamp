// DOM Events
// Check MDN for list of events

// In-line events
// These are considered bad practice
// Doesn't follow separation of concerns
// <button onclick="alert('clicked!')"></button>

// DOM object property events
// Decent, but not best, option for working with events
// Can only add one callback function using this approach
const btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    alert("clicked!!");
};

// addEventListener
// Best option for working with events
// Can add multiple callback functions
// Optional param to pass in an object with different options
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("clicked!!!");
});

// 'this' keyword
// Inside of an event handler callback the keyword
// 'this' refers to whatever element called the function

// Event object
// Autiomatically based into callback function when we use addEventListener
// Particularlly useful when working with keyboard events
btn2.addEventListener("keydown", function(event) {
    // can name event 'e' or anything
    console.log(event.key);     // Actual letter    // q
    console.log(event.code);    // KeyQ
});

// Form Events
// Prevent Default
const form = document.querySelector('form');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

form.addEventListener('submit', event => {
    // Prevent form from submitting
    event.preventDefault();
});

// Fires whenever what is in the input changes
input.addEventListener('input', e => {
    h1.innerText = input.value;
});

// Event Bubbling
// If you have events nested in the HTML they will all fire
// Can stop bubbling with an event method "stopPropagation"
input.addEventListener('click', e => {
    e.stopPropagation();
    // Other code here
});

// Event Delegation
// If clicking on a UL, event.target shows the particular LI that was clicked
const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
    e.target.nodeName === 'LI' && e.target.remove();
});



