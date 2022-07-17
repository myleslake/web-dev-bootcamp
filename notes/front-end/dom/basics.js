// DOM
// Document Object Model
// The DOM is a javascript representation of a webpage
// When browser loads a webpage it creates javascript
// objects based on the html and css

// Selecting Elements --------------------------------------------------------------------
// Basically can use any query you could with css
const myElement0 = document.querySelector('#id');           // returns first match
const myElements1 = document.querySelectorAll('img');       // returns HTML
const myelements2 = document.querySelectorAll(".d-none")    // collection

// Less common since querySelector was added
const myElement3 = document.getElementById("myId");              // returns object
const myElements4 = document.getElementsByClassName("d-none");   // returns html
const myElements5 = document.getElementsByTagName("img");        // collection

// HTML collection is not an array, but has index and .length properties
// and can be iterated over like an array.
// HTML collection does not include array methods
for (let img of myElements5) {
    console.log(img.src);
}

// If nothing is found, querySelector/getElementById returns null, but the others
// return an empty HTML collection

// Manipulating Elements
// innerText        // textContent
// innerHtml        // value
// style            // classList
// getAttribute     // setAttribute()  // these use the text of the html not an object
// remove()

// Attributes ----------------------------------------------------------------------------
// Can access basically any HTML attribute
// Can use this or the methods
myElements1[0].id
myElements1[0].src
myElements1[0].title

// Styles --------------------------------------------------------------------------------
// Adding/removing class instead of in-line styles
// is considered best practice
// The keys are camelCase instead of dash-case
// Style object only shows in-line styles and not
// styles from style sheets
const h1 = document.querySelector("h1");
h1.style.color = "green";
h1.style.fontSize = "14px";

// Gets the actual computed style including external style sheets
window.getComputedStyle(h1).fontSize

// Classes -------------------------------------------------------------------------------
h1.classList.add("d-none");
h1.classList.toggle("d-none");
h1.classList.remove("d-none");
h1.classList.contains("d-none");    // returns boolean

// Relative properties -------------------------------------------------------------------
h1.parentElement
h1.children             // HTML collection
h1.nextElementSibling           // .nextSibling gives text nodes instead of elements
h1.previousElementSibling       // can include whitespace and new lines

// Add/Remove Elements -------------------------------------------------------------------

// Add
const img = document.createElement('img');
img.src = 'https://google.com/someimage.jpg';
document.body.appendChild(img);

const h3 = document.createElement('h3');
h3.innerText = "NEW H3!!";
document.body.appendChild(h3);
// or
const p = document.querySelector('p');
p.append(h3); // just appends it to the end // can append multiple items // No IE support
p.prepend(h3); // adds to beginning
p.insertAdjacentElement('beforebegin', h3);

// Remove
p.removeChild(h3);
p.remove();         // Removes element that calls it    // No IE support







