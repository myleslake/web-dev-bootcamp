// Imports
const path = require('path');
const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({extended: true }));     // To Parse form data in incoming request body
app.use(express.json());                            // To parse json in incoming request body

app.set('views', path.join(__dirname, 'views'));    // Set directory of views for our project
app.set('view engine', 'ejs');                      // Set view engine for templating to ejs

// Fake database
let comments = [
    {
        id: 1,
        username: "Todd Downing",
        comment: "I am a terrible offensive coordinator!"
    },
    {
        id: 2,
        username: "Jon Robinson",
        comment: "I sure wish I didn't trade AJ Brown!"
    }
];

// Home
app.get("/", (req, res) => {
    res.render("index");
});

// Index
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
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
app.listen(3000, (error) => {
    console.log("LISTENING ON PORT 3000!");
});