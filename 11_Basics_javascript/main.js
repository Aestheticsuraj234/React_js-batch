// let myDate = new Date();


// // console.log(myDate.toString()); // 2021-07-07T06:00:00.000Z 
// // console.log(myDate.toDateString()); // Wed Jul 07 2021
// // console.log(myDate.toLocaleDateString());  // 7/7/2021


// console.log(typeof myDate); // object


// let myCreatedDate = new Date(2024 , 0 , 23);
// let myTimeStamp = Date.now();
// console.log(myTimeStamp.getTime()); // 1701539200000
// console.log(myCreatedDate.toDateString()); // 1997-07-07T00:00:00.000Z

// let currentDate = new Date();
// console.log(currentDate.toLocaleString("default",{
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric'
// })); 



// // Objects

// // singleton 

// // object literals
// let mySamp = Symbol("HEllo")

// const CwrUser = {
//     name:"suraj",
//     [mySamp]:"Hello",
//     age: 20,
//     location:"Noida",
//     email:"suraj@example.com",
//     isLoggedIn: true,

// }

// CwrUser.greeting = function(){
//     console.log("Hello, Good Morning"+ this.name);
// }


// console.log(CwrUser.greeting());

// // console.log('====================================');
// // console.log(CwrUser["email"]);
// // console.log(CwrUser[mySamp]);
// // console.log('====================================');




const tiner = new Object();

tiner.id = 1;
tiner.name = "Tiner";
tiner.age = 30;

console.log(tiner);


const regularUser = {
    email: "xsur@exmaple.com",
    fullName: {
        userFullName: {
            firstName: "Suraj",
            lastName: "Kumar"
        },
    }
}


console.log(regularUser.fullName.userFullName.firstName);




const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const obj2 = {
    z: 26,
    a: 100
}

const combineObj = Object.assign({}, obj1, obj2);