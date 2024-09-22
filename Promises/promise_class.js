function random(resolve){
    setTimeout(resolve, 3000)
}

let p = new Promise(random) // Suppose to return you something eventually



//Using the eventiual value returned by the promise
function callback() {
    console.log("Promise succedded")
}

p.then(callback);