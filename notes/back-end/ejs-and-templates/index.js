const express = require('express');
const app = express();
const path = require('path');

// Set up ejs
// Default directory for templates is /views
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home"); // render template with ejs
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("subreddit", { subreddit });
});

app.get("/rand", (req, res) => {
    const randomNumber = Math.floor(Math.random() * 10);
    res.render("rand", { randomNumber: randomNumber }); // {randomNumber}
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});