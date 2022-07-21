const jokes = require("give-me-a-joke");
const colors = require("colors");

jokes.getRandomCNJoke(joke => {
    console.log(joke.rainbow);
});

