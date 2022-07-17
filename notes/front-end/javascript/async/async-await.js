// async & await keywords

// async ------------------------------------------------
// * Async functions automatically return a promise
//      - Don't have to say: return new Promise
// * If the function returns a value, the promise will
//      be resolved with that value.
// * If the function throws an exception, the promise 
//      will be rejected.

async function hello() {
    return "Hello";
}

const sing = async () => {
    // Rejected if something goes wrong
    //throw new Error("Oh no!"); // Or, can manually throw an error
    return "la la la";
}

sing()
    .then((data) => {
        console.log(`Promise resolved with: ${data}`);
    })
    .catch((err) => {
        console.log("Oh no! Error: ", err);
    });

// Random trivial example
const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials";
    if (password == 'qwerty') return true;
    throw "Invalid Password!";
}

login("lakemyles", "qwerty")
    .then(data => {
        console.log("Logged in!", data);
    })
    .catch(err => {
        console.log("ERROR:", err);
    });


// await -------------------------------------------------
// * await keyword commonly used inside async functions
// * await will pause the execution of the function,
//      waiting for a promise to be resolved
// * Essiantly makes an async function synchronous
// * Next line will not be executed until the 
//      promise we're awaiting is resolved

await sing(); // If sing were to take awhile,
await sing(); // we wouldn't excute the next line
await sing(); // until sing was resolved
await sing();


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise("url");
        let data2 = await fakeRequestPromise("url2");
        console.log(data1);
    } catch (err) {
        console.log(err);
    }
}