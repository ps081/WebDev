const promiseOne = new Promise((resolve)=>setTimeout(resolve, 1000))

promiseOne
.then(()=>{
    console.log("Hi"), setTimeout(()=>{
        
    },3000)
})


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