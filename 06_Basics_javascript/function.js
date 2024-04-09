
function CountNumber(){
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
    console.log("6");
}

// CountNumber()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "suraj"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `Hello ${username} just logged in`
}

// console.log(loginUserMessage("Suraj"))
// console.log(loginUserMessage("Jha"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Suraj",
    age: 20
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


// Immediately Invoked Function Expressions (IIFE)

(function(){
    console.log("IIFE")
})()




( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Suraj Jha')