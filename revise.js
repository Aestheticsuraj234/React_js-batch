const readline = require('readline');

function one() {
    const username = "Suraj";
    function two() {
        const website = "googleMeet";
        console.log(username);
    }

    //console.log(website)
    two();
}

one();


if (true) {
    const username = "Suraj";

    if (username === "Suraj") {
        const website = "googleMeet";
        console.log(username + " " + website);
    }

    //console.log(website)
}

console.log(username + " " + website);




function prints() {
    return console.log("Hello");
}


console.log(NaN === NaN);

console.log(isNaN(NaN));



// *Map - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = array.map(
    function (element, index) {
        return element * 2
    }
)

console.log(newArray)
console.log(array)



//return keyword in functions



function add(a, b) {
    return a + b

}

let val = add(2, 3);
console.log(val)


const obj = { foo: 'bar', baz: { nested: 'value' } };

console.log(obj);



function reverseString(str) {
    return str.split('').reverse().join('');
}


console.log(reverseString("madam"));


nums.reduce(function (previousValue, currentValue, index, array) {
    console.log(previousValue, currentValue, index, array)
}, 10)

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = nums.reduce(function(prevValue , currValue ){
    console.log(`prevValue: ${prevValue} , currValue: ${currValue}`)
    return prevValue + currValue
},0)

console.log(total)


function one()
{
    return 
    
}


console.log(10 / "appple")