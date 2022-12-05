// CHECK demo/index.js for full notes
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'demo/views'));

// Fake temp database
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
});

app.get('/', (req, res) => {
    res.send("Home Page!");
});

app.listen(3000, (err) => {
    console.log("I'm listening on port 3000!");
});


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
// Edit route - update one resource
// Destroy route - delete one resource