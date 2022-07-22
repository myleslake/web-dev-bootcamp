const figlet = require("figlet");
const colors = require("colors");

const input = process.argv[2] || "Hello World!!!";

figlet(input, function (err, data)  {
    if(err) {
        console.log('Something went wrong!');
    }
    console.log(data.rainbow);
});