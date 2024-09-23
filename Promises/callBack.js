function stepOne(){
    console.log("It is the step first after 1 sec");
    setTimeout(stepTwo, 3000)
}

function stepTwo(){
    console.log("It is the second step after 3 sec")
    setTimeout(stepThree, 5000);
}

function stepThree(){
    console.log("It is the third step after 5 sec")
}

setTimeout(stepOne, 1000)