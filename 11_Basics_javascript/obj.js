// let obj_1 = {name: "Suraj", age: 20, location: "Noida"};
// console.log(obj_1);

// // Obejct Create
// let obj_3 = Object.create(obj_1);
// console.log(obj_3);

// let obj_2 = new Object();

// obj_2.id = 1;
// obj_2.name = "Tiner";
// obj_2.age = 30;
// obj_2.greet = function(){
//     console.log("Hello, Good Morning");
// }

// console.log(obj_2);

// accessing object properties

let obj_1 = {name: "Suraj", age: 20, location: "Noida" ,"isProgrammer":"true"};

// console.log(obj_1.name);
// console.log(obj_1["name"]);

// console.log(obj_1["isProgrammer"]);


// let mySymbols = Symbol("SIGMA");
// console.log('====================================');
// console.log(typeof mySymbols);
// console.log('====================================');

// let SampleObj = {
//     id: 1,
//     name: "Suraj",
//     age: 20,
//     location: "Noida",
//     [mySymbols]: "Hello"
// }

// console.log(typeof SampleObj["mySymbols"]);


// const mySymbol = Symbol();

// const myObject = {
//   [mySymbol]: 'Hello World'
// };

// console.log(myObject[mySymbol]);
// // expected output: 'Hello World'




// console.log(myObj["age"])


// Object Methods

//* 1.Object.keys()

// let myObj = {
//         name:"suraj",
//         age:20
// }



// console.log(Object.keys(obj));

// *Object.values()


// let obj = {carname:"Fiat", model:"500", color:"white"};

// console.log(Object.values(obj));


// *Object.entries()

let sampleObj = [{name:"suraj",age:20} , ]
let sampleObj2 = {location:"noida",instaId:"sigma_developer_"}
let sampleObj3 = Object.assign(sampleObj , sampleObj2)

// console.log(sampleObj3);


// *Object.hasOwnProperty()

console.log(sampleObj3.hasOwnProperty("name"));

