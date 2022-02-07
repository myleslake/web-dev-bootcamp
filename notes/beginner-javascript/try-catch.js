// Try/Catch statements
// Used to gracefully handle exceptions
try {
    hello.toUpperCase(); // hello is undefined
} catch { 
    console.log("ERROR!!!");
}

// Can also catch the particular error
// e is optional as in the use case above
try {
    hello.toUpperCase(); // hello is undefined
} catch (e) { 
    console.log("ERROR!!!");
    console.log(e);
}