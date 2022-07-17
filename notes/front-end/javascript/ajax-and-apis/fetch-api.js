// Fetch API
// Newer way of making requests via JS
// Supports promises
// No IE support

fetch("https://swapi.dev/api/people/5")
    .then(response => {
        console.log("RESOLVED", res);
        // response doesn't contain all of our data, so 
        // we need to get data from response.json, which
        // itself is a promise
        return response.json;
    })
    .then(data => {
        // data will now be a JS object
        console.log(data.name);
    })
    .catch(err => {
        console.log("ERROR");
    });


// Refactor to use async function
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/5");
        const data = await res.json();
        console.log(data.name);
    }
    catch (e) {
        console.log("ERROR", e);
    }
}