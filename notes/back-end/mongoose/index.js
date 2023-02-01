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

const bourneIdentity = new Movie({ title: 'The Bourne Identity', 
    year: 2004, score: 10.0, rating: 'R' });

// Save one object
bourneIdentity.save(); 

// Can do the schema in-line:
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
// --------------------------------------------------

// Insert Many --------------------------------------
// Don't have to call save
// Returns a promise
Movie.insertMany([
    { title: 'Shrek', year: 2003, score: 8.0, rating: 'PG-13' },
    { title: 'The Lion King', year: 1991, score: 7.2, rating: 'PG' },
    { title: 'The Godfather', year: 1999, score: 9.1, rating: 'R' }
])
.then(data => {
    console.log("SUCCESS!!");
    console.log(data);
});
// --------------------------------------------------

// Finding ------------------------------------------
// Mongoose queries are "thenable" objects. .then works, but not an acutal promise
Movie.find({rating: "R"}).then(data => console.log(data));
Movie.find({year: {$gte: 2004}}).then(data => console.log(data));
Movie.find({year: {$lt: 1995}}).then(data => console.log(data));
Movie.find({title: {$in: ["Shrek", "The Lion King"]}}).then(data => console.log(data));

// findOne() - Return the first item selected
Movie.findOne({}).then(m => console.log(m));

// findById() - Returns item with matchign id
Movie.findbyId('50e923449a384ca9234f03').then(m => console.log(m));

// .exec() gives us a full promise, not just "thenable" object
// Main benefit is it provides a better stack trace
// --------------------------------------------------

// Updating -----------------------------------------
// updateOne() - Only update first thing that matches query
// Update Shrek's year to 2003
Movie.updateOne({title: "Shrek"}, {year: 2003}).then(res => console.log(res));

// updateMany() - Update all matching
// Update Shrek and Lion king to a score of 10
Movie.updateMany({title: {$in: ["Shrek", "The Lion King"]}}, {score: 10}).then(res => console.log(res));

// findOneAndUpdate - Update one and return the updated object // new: false - old object // new: true - updated object
Movie.findOneAndUpdate({title: "The Bourne Identity"}, {score: 10}, {new: true}).then(movie => console.log(movie));

// findByIdAndUpdate - Update one by id and return updated object
// --------------------------------------------------

// Deleting -----------------------------------------
// depracated - remove() - deletes object and returns deleted count
// deleteOne - delete one and returns deleted count
// deleteMany - delete many and returns deleted count
// findOneAndRemove() - deletes object and returns an object -- same as findOneAndUpdate()
// findByIdeAndRemove() - same as findByIdAndUpdate()

Movie.findOneAndDelete({title: "The Godfather"}).then(movie => console.log(movie));
// --------------------------------------------------