// NodeJS
// command "node" opens the node REPL
// .exit will close node REPL

// for(let i=0; i < 10; i++) {
//     console.log(i);
// }

// Process is an object that is available in the global scope
// Provides input about current node process

//console.log(process.cwd()); // prints current working directory
console.log(process.argv[2]); // returns an array containing command line arguments passed when node was launched

// File System
//const fs = require('fs');
// fs.mkdir('puppies', { recursive: true }, (err) => {
//     if(err) throw err;  
// });

const fs = require('fs');
const folderName = process.argv[2] || 'Project';

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`);
    fs.writeFileSync(`${folderName}/app.css`);
    fs.writeFileSync(`${folderName}/app.js`);
} catch (e) {
    console.log("ERROR!");
    console.log(e);
}
