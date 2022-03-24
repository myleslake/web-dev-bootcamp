// Promises
// A Promise is an object representing the eventual
// completion or failure of an asynchronous operation

// SEE promise-vs-callback.js FOR IN-DEPTH EXPLANATION

// Using a Promise
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    });


// Make a new Promise
// resolve and reject are most common param names, 
// but they can be anything
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("YOUR DATA GOES HERE!");
            }
            reject("Request Error!");
        }, 1000);
    });
};
