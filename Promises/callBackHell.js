//************************ My written wrong code*************************************


// function setTimeOUtWala(ms){
//     return new Promise(resolve=> setTimeout(resolve, ms))
// }

// setTimeOUtWala(1000)
// .then(()=>console.log("Hi"), setTimeOUtWala(3000)
// .then(()=>console.log("Mid printed after 3 sec"), setTimeOUtWala(5000)
// .then(()=>console.log("Last printed after 5 sec"))))


// *************************My written code which is also working*********************


// setTimeout(()=>{
//     console.log("Hi")
//     setTimeout(()=>{
//         console.log("yh mid 3 sec wala hain")
//         setTimeout(()=>{
//             console.log("Yh hain 5 sec wala")
//         }, 5000)
//     }, 3000)
// }, 1000)

// **************************This is completely fine*******************************************



// function setTimeoutPromisified(duration){
//     return new Promise((resolve)=>{
//         setTimeout(resolve, duration)
//     })
// }

// Promise chaining

// setTimeoutPromisified(1000).
// then(()=>{
//     console.log("hi")
//     return setTimeoutPromisified(3000)
// })
// .then(()=>{
//     console.log("Hello it is 3 sec after");
//     return setTimeoutPromisified(5000)
// })
// .then(()=>{
//     console.log("Hello it is 5 sec after");
// })


// ****************** code is written by harkirat****************************8




let str1 = "sandeep";
// const sortedString = str1.split("").sort().join("");
// Answer: adeenps

// const sortedString = str1.split("");
/* Answer: 
[
  's', 'a', 'n',
  'd', 'e', 'e',
  'p'
]
*/

// const sortedString = str1.split("").sort();
/* Answer
[
  'a', 'd', 'e',
  'e', 'n', 'p',
  's'
]
*/
const sortedString = str1.split("").sort().toLowerCase();

console.log(sortedString)

// sandeep 
// split("") change the string in Array
// sort() sort the array
// join("") Join again join the array in string