// Connecting to Mongoose -- also: npm init -y then npm i mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("ERROR!!!");
        console.log(err);
    });

// Instead of doing this, we're using promises above ^
// -------------------------------------------------
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, `connection error:`));
// db.once('open', function(){
//     console.log("CONNECTION OPEN!");
// });
// --------------------------------------------------

// Schema -------------------------------------------
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});
// --------------------------------------------------

// Models -------------------------------------------
const Movie = mongoose.model('Movie', movieSchema);

//const bourneIdentity = new Movie({ title: 'The Bourne Identity', 
    //year: 2004, score: 10.0, rating: 'R' });

// Save one object
//bourneIdentity.save(); 

// Can do the schema in-line:
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
// --------------------------------------------------

// Insert Many --------------------------------------
// Don't have to call save
// Returns a promise
// Movie.insertMany([
//     { title: 'Shrek', year: 2003, score: 8.0, rating: 'PG-13' },
//     { title: 'The Lion King', year: 1991, score: 7.2, rating: 'PG' },
//     { title: 'The Godfather', year: 1999, score: 9.1, rating: 'R' }
// ])
// .then(data => {
//     console.log("SUCCESS!!");
//     console.log(data);
// });
// --------------------------------------------------

// Finding ------------------------------------------
// Mongoose queries are "thenable" objects. .then works, but not an acutal promise
Movie.find({rating: "R"}).then(data => console.log(data));
Movie.find({year: {$gte: 2004}}).then(data => console.log(data));
Movie.find({year: {$lt: 1995}}).then(data => console.log(data));

// findOne() - Return the first item selected
Movie.findOne({}).then(m => console.log(m));

// findById() - Returns item with matchign id
Movie.findbyId('50e923449a384ca9234f03').then(m => console.log(m));

// .exec() gives us a full promise, not just "thenable" object
// Main benefit is it provides a better stack trace
// --------------------------------------------------

// Updating -----------------------------------------

// --------------------------------------------------

// Deleting -----------------------------------------

// --------------------------------------------------