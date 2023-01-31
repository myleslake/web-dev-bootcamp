// Imports
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({extended: true }));     // To Parse form data in incoming request body
app.use(express.json());                            // To parse json in incoming request body
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'));    // Set directory of views for our project
app.set('view engine', 'ejs');                      // Set view engine for templating to ejs

// Fake database
let comments = [
    {
        id: uuid(),
        username: "Todd Downing",
        comment: "I am a terrible offensive coordinator!"
    },
    {
        id: uuid(),
        username: "Jon Robinson",
        comment: "I sure wish I didn't trade AJ Brown!"
    }
];

// Home - GET - Basic index home page - NOT part of restful routing pattern
app.get("/", (req, res) => {
    res.render("index");
});

// Index - GET - Renders multiple resources
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
});

// New - GET - Renders a form to create a new resource
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});

// Create - POST - Creates a new resource
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    const newComment = {
        id: uuid(),
        username: username,
        comment: comment
    };
    comments.push(newComment);
    res.redirect("comments");
});

// Show/Details - GET - Renders details about a single resource
app.get("/comments/:id", (req, res) => {
    console.log("Defail");
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/details", { comment });
});

// Edit - GET - Renders a form to edit a resource
app.get("/comments/:id/edit", (req, res) => {
    //const id = req.params.id;                         // This does work too if you don't want to mess with destructuring from params.
    const { id } = req.params; 
    console.log(id);
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment });
});

// Update - PATCH - Updates an existing resource
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newCommentText = req.body.comment;
    foundComment.comment = newCommentText;
    res.redirect("/comments");
});

// Delete - DELETE - Deletes an existing resource
app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
});

// Default - GET - NOT part of restful routing pattern
app.get('*', (req, res) => {
    res.send("Oops! Page not found!");
});

// Listen
app.listen(3000, (error) => {
    console.log("LISTENING ON PORT 3000!");
});


// Notes
// restful routing maps to basic CRUD operations

// syntax: VERB /resource
// Because we have different verbs, we can keep a uniform path name
// Resource is the name of the resource, but plural
// GET /comments
// POST /comments
// GET /comments/:id
// PATCH /comments/:id
// DELETE /comments/:id

// Route naming convention/pattern - Started in Ruby on Rails
// Index route - show all/multiple resources
// New route - renders form to create new resource
// Create route - create new resource
// Show route - show one resource (details route)
// Edit route - render form to update one resource\
// Update route - update one resource
// Destroy route - delete one resource