// Async Javascript

// The call stack
// The mechanism the JS interpreter uses to keep
// track of its place in a script that calls multiple
// functions. (How JS knows where it is)

// JS is single threaded
// Can only run one line of code at a time

// JS hands off certain requests/Web APIs to the browser to process
console.log("First");
setTimeout(() => {
    console.log("Third");
}, 3000);
console.log("Second");

// Nesting callbacks (Callback Hell!)
setTimeout(() => {
    document.body.style.backgroundColor("red");
    setTimeout(() => {
        document.body.style.backgroundColor("orange");
        setTimeout(() => {
            document.body.style.backgroundColor("yellow");
            setTimeout(() => {
                document.body.style.backgroundColor("green");
                setTimeout(() => {
                    document.body.style.backgroundColor("blue");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000);
}, 1000);

// Nesting callbacks using functions
// Same result as the above code, but easier to read
const delayedColorChange = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor(color);
        doNext && doNext();
        // "doNext &&" makes sure that doNext is not
        // null or undefined before calling it.
    }, delay);
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                });
            });
        });
    });
});