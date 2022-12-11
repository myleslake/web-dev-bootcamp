// Imports
const express = require('express');
const app = express();


// Usings
app.use(express.urlencoded({extended: true }));
app.use(express.json());

// Home
app.get("/", (req, res) => {
    res.send("Home Page!");
});

// Get


// Post


// Put


// Patch


// Delete


// Default
app.get('*', (req, res) => {
    res.send("Oops! Page not found!");
});

// Listen
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
});