const fs = require("fs")

const content = fs.readFileSync('a.txt', 'utf8');

console.log(content);