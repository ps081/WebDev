const fsa = require("fs")

// fs stands for file system

const content = fsa.readFile('a.txt', 'utf8'); // readFile is reading the file asynchronously

console.log(content);

const content2 = fsa.readFileSync('b.txt', 'utf8'); // readFileSync reading the file synchronsliy

console.log(content2);

// let user = {
//     age: 21,
//     name: "Sandeep",
//     calcualteAge: function(){
//         return 10
//     }
// }

// console.log(user.calcualteAge())