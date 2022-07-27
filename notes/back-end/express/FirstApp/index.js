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

app.post('/cats', (req, res) => {
    res.send("Saved your cat!");
});

app.get('/cats', (req, res) => {
    res.send("Meow!");
});

app.get('/dogs', (req, res) => {
    res.send("Woof!");
});

// Catches all other incoming get requests
app.get('*', (req, res) => {
    res.send("I don't know that route!");
});

// Starts app on port number given
// Needs to come at the end because routes are matched in order
// and every route matches this one.
app.listen(3000, () => {
    res.send("I'm listening on port 3000!");
});