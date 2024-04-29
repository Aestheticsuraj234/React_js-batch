// // const readline = require('readline');

function one() {
    const username = "suraj";

    function two()
    {
        const website = "googleMeet"
        console.log(username)
    }

   

    two()
}

one();


// // if (true) {
// //     const username = "Suraj";

// //     if (username === "Suraj") {
// //         const website = "googleMeet";
// //         console.log(username + " " + website);
// //     }

// //     //console.log(website)
// // }

// // console.log(username + " " + website);




// // function prints() {
// //     return console.log("Hello");
// // }


// // console.log(NaN === NaN);

// // console.log(isNaN(NaN));



// // // *Map - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let newArray = array.map(
// //     function (element, index) {
// //         return element * 2
// //     }
// // )

// // console.log(newArray)
// // console.log(array)



// // //return keyword in functions



// // function add(a, b) {
// //     return a + b

// // }

// // let val = add(2, 3);
// // console.log(val)


// // const obj = { foo: 'bar', baz: { nested: 'value' } };

// // console.log(obj);



// // function reverseString(str) {
// //     return str.split('').reverse().join('');
// // }


// // console.log(reverseString("madam"));


// // nums.reduce(function (previousValue, currentValue, index, array) {
// //     console.log(previousValue, currentValue, index, array)
// // }, 10)

// // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let total = nums.reduce(function(prevValue , currValue ){
// //     console.log(`prevValue: ${prevValue} , currValue: ${currValue}`)
// //     return prevValue + currValue
// // },0)

// // console.log(total)


// // function one()
// // {
// //     return 
    
// // }


// // console.log(10 / "appple")



// // let customDate = new Date(2022 , 0 , 5 , 10 , 30 , 30 , 0)
// // console.log(customDate)

// // function Add()
// // {
// //     10 + 20
// // }

// // console.log(Add())

// // const myFoo = ()=>{
// //     return 10+20
// // }

// // console.log(myFoo())


// let myCeil = 10.2
// console.log(Math.floor(myCeil))


// let myString = "suraj jha this is my fav language 'javascript' and i love it"


// for(let i =1;i<=10;i++)
// {
//     console.log(1)
// }


const person = { name: "John", age: 30 };

for(let key in person)
{
    console.log(key , ":" , person[key])
}