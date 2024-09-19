const fsa = require("fs")

// fs stands for file system

const content = fsa.readFileSync('a.txt', 'utf8');

console.log(content);

// let user = {
//     age: 21,
//     name: "Sandeep",
//     calcualteAge: function(){
//         return 10
//     }
// }

// console.log(user.calcualteAge())