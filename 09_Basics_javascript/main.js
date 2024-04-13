// *For Loop

// number = 1
// number = 2
// number = 3
// number = 4
// number = 5
// // .
// // .
// // .
// number = 10
// number = 11


// for(let number = 1 ; number<=10 ; number++){
//     console.log("number = " + number);

// }

// let number = 2;

// for(let i=1;i<=10;i++)
// {
//     console.log(`${number} x ${i} = ${number * i} `)
//     // console.log(number + " x " + i + " = " + number * i);
// }






// **for...of loop:**

// let fastFood = ['🍔', '🍟', '🌭', '🍕', '🥪'];
// for (let foodItem of fastFood)
// {
//     console.log(foodItem);
// }

// let string = "IronMan";
// for(let character of string)
// {
//     console.log(character);

// }


// let myObj = {
//     name: "IronMan",
//     age: 45,
//     isAvenger: true
// }

// for(let item of myObj)
// {
//     console.log(item);

// } //! ye cheez kaam nhi kregi




// *For In Loop

// let myObj = {
//     name: "IronMan",
//     age: 45,
//     isAvenger: true
// }

// for(let item in myObj)
// {
//     console.log(item)
// }



// *While Loop

// let number = 11;
// while(number<=10)
// {
//     console.log(number)
//     number++
// }



// *Do While Loop ---- negligible use

// let num = 11;
// do{
//     console.log(num)
// }
// while(num<=10)




// Break and Continue

// for(let i=1;i<=10;i++)
// {
//     if(i===5){
//         console.log("I am 5")
//         break;
//     }
//     console.log(i)
// }

for(let i=1;i<=10;i++)
{
    if(i==5){
        continue;
    }
    console.log(i)
}