// Bring in express module
const express = require("express");
const app = express();

// Catches requests to server
// req and res are made by express and passed to callback
// Represent incoming request and outgoing response
// app.use((req, res) => {
//     //console.log("Request received!");
//     //res.send("Hello!"); // Returned to requester (browser/postman)
//     //res.send({color: "red"}); // express will know to pass json as content type in header
// });

// Root route
app.get('/', (req, res) => {
    res.send("Home Page!");
});

// Pattern match
// colon signifies a variable in a pattern
app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Browsing ${postId} on the ${subreddit} subreddit`);
});

// Query string
// http://localhost:8080/search?q=dogs&color=red
app.get("/search", (req, res) => {
    const {q, color} = req.query;
    if(!q) {
        res.send("Nothing found if nothing is searched!!!!!");
    } else {
        res.send(`<h1>Search results for ${q} and ${color}</h1>`);
    }
});

// Exact match routes
// app.post('/cats', (req, res) => {
//     res.send("Saved your cat!");
// });

// app.get('/cats', (req, res) => {
//     res.send("Meow!");
// });

// app.get('/dogs', (req, res) => {
//     res.send("Woof!");
// });

// Catches all other incoming get requests
app.get('*', (req, res) => {
    res.send("I don't know that route!");
});

// Starts app on port number given
// Needs to come at the end because routes are matched in order
// and every route matches this one.
app.listen(8080, (err) => {
    console.log("I'm listening on port 3000!");
});