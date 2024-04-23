// let User = "Jhon doe"
// // let greetUser = "Hello" + " " + User + "!";


// let greetUser = `Hello ${User}!`

// console.log(greetUser); // Output: Hello Suraj!


// function ADDTWONUMS(a , b)
// {
//     return `the sum of ${a} and ${b} is ${a+b}`
// }


// let result = ADDTWONUMS(1,20)

// console.log(result);




// *Rest Operator in JavaScript

// function ADD(...numbers)
// {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// let res = ADD(1,3)

// console.log(res);




// *Spread Operator in JavaScript

let fruits = ["Apple", "Banana", "Mango"];

let vegetables = ["Potato", "Tomato", "Onion"];

let foodItems = [...fruits , ...vegetables , "Chicken", "Fish"]

console.log(foodItems); 



let object1 = {
    username: "Suraj",
    age: 20,
    myObj:{
        isProgrammer: {
            isTrue: true
        }
    }
}


let object2 = {
    email:"xsur234@gmail.com",
    password: "123456"
}

let UserInfo = {...object1, ...object2}

// console.log(UserInfo); 


UserInfo.myObj.isProgrammer.isTrue = false;

console.log(object1);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , [12,34]]

let arr2 = [...arr]

arr2[10][0]= 100;

console.log(arr);