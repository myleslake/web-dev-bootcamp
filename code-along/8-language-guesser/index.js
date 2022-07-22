const franc = require('franc');
const langs = require('langs');

try {
    const input = process.argv[2];
    let languageCode = franc(input);
    let language = langs.where("2", languageCode);
    console.log(language.name);
} catch(e) {
    console.log("Could not determine the language.");
}