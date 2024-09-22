const fs = require('fs');


function print(err, data){
    if(err){
        console.log("File not found!");
    }
    else {
        console.log(data)
    }
}


function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

const data = "How it is going sandeep"

// const content = fs.readFile('data.txt', 'utf-8', print);

// console.log(content)

setTimeoutPromisified(3000).then(()=> fs.readFile('data.txt', 'utf-8', print))
setTimeoutPromisified(6000).then(()=> fs.writeFile('data.txt', data, (err, data)=>{
    if(err){
        console.log("File not found!");
    }
    else {
        console.log(data)
    }
}))
setTimeoutPromisified(15000).then(()=> fs.readFile('data.txt', 'utf-8', print))