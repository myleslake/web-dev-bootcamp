const express = require('express');
const app = express();
const path = require('path');

// Set up ejs
// Default directory for templates is /views
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home"); // render template with ejs
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});