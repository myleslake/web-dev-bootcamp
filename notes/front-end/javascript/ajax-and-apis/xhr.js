// XHR
// XML Http Request
// Original way of sending requests via JS
// Does not support promises


const req = new XMLHttpRequest();

req.onload = function () {
    console.log("SUCCESS");
    console.log(this.responseText);

    // get JS object
    var data = JSON.parse(this.responseText);
    console.log(data.name);
};

req.onerror = function () {
    console.log("ERROR");
    console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/5");
req.send();