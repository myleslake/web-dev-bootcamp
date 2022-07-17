// Axios
// A library for making HTTP requests
// Not native to JS
// Uses fetch behind the scenes
// Include scribt from  jsDelivr CDN
// Second axios argument to pass headers

axios.get("https://swapi.dev/api/people/5")
    .then(res => {
        console.log("success", res.data);
    })
    .catch(err => {
        console.log("error", err);
    });

// Refactor to async

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (e) {
        console.log("error", e);
    }
};

getStarWarsPerson(5);
getStarWarsPerson(10);


// Add new joke to UL. Use headers
const jokes = document.querySelector("#jokes");
const button = document.querySelector('#submit');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
};

const getDadJoke = async () => { 
    try {
        // Don't have to pass header in separate variable, but may look cleaner
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "No jokes available! :("
    }
};

button.addEventListener("click", addNewJoke)