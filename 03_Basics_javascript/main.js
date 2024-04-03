// // let num = 24; //number
// // let floatNum = 24.5; //float number
// // let str = "Hello World"; //string ("" , '' , ``)
// // let isProgrammer = true //boolean (true(1) , false(0))
// // let nulls = null; // null
// // let undef = undefined; //undefined



// // // Non-primitive data types

// // let myObj = {
// //     name: "John",
// //     age: 25,
// //     isProgrammer: true,
// //     nestedObj:{
// //         name: "John",
// //         age: 25,
// //         isProgrammer: true,
// //     }
// // }



// // let myArr = [1,"Suraj",true,myObj]
// // // let arr = new Array(1,"Suraj",true,myObj)

// // console.log(myArr)


// //!operators


// // 1. Arithmetic operators (+ , - , * , / , % , **)

// let resultAdd = 5 + 3; // resultAdd will be 8

// // console.log(resultAdd)

// // Subtraction
// let resultSub = 10 - 4; // resultSub will be 6

// // Multiplication
// let resultMul = 6 * 2; // resultMul will be 12

// // Division
// let resultDiv = 20 / 5; // resultDiv will be 4

// // Modulus (Remainder)
// let resultMod = 10 % 3; // resultMod will be 1

// console.log(resultMod)

// let resultPow = 2 ** 3; // resultMod will be 8

// console.log(resultPow)

// let count = 5;
// console.log(++count); // Increment count by 1, now count is 6
// console.log(count)

// // Decrement
// let value = 8;
// value--; // Decrement value by 1, now value is 7



// // assignment operators

// let x = 10;
// x += 5; // Equivalent to: x = x + 5, so x will be 15

// console.log(x)

// let y = 20;
// y -= 3; // Equivalent to: y = y - 3, so y will be 17

// let z = 4;
// z *= 2; // Equivalent to: z = z * 2, so z will be 8

// let w = 15;
// w /= 3; // Equivalent to: w = w / 3, so w will be 5



// // 3. **Comparison Operators:**


// let a = 5;
// let b = 10;

// // Equal to
// console.log(a == 5); // true

// // Not equal to
// console.log(b != 10); // false

// // Strict equal to (compares both value and type)
// console.log(a === '5'); // false

// // Strict not equal to
// console.log(b !== '10'); // true

// // Greater than
// console.log(a > 3); // true

// // Less than
// console.log(b < 15); // true

// // Greater than or equal to
// console.log(a >= 5); // true

// // Less than or equal to
// console.log(b <= 10); // true



// let myNum = 5

// console.log(myNum >= 5)


// let p = true;
// let q = true;

// // Logical AND
// console.log(p && q); // false

// // Logical OR
// console.log(p || q); // true

// // Logical NOT
// console.log(!p); // false



let value = 10;

// typeof operator
console.log(typeof value); // "number"

// delete operator
let obj = { x: 5, y: 10 };
delete obj.x; // Deletes property 'x' from obj

// new operator
function Person(name) {
  this.name = name;
}

let person = new Person('John');

// void operator
let result = void "Suraj"; // result is undefined

console.log(result)