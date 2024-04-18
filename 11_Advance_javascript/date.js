// Creation of Date object
// let currentDate = new Date();
// let lockdownDate = new Date("2019-03-22T12:00:00");

// console.log(lockdownDate);


// let customDate = new Date(2024,  3, 16);  //(year , month, date, hour, minute, second , ms) , 

// console.log(customDate);


// //* #### Getting Information:

// // *1 GetDate

// let currentDate = new Date()
// console.log(currentDate.getDate())


// // *2 GetDay 
// console.log(currentDate.getDay()) // 0 - 6 (0 is sunday)

// // *3 GetFullYear
// console.log(currentDate.getFullYear())


// // *4 GetMonth
// console.log(currentDate.getMonth()) // 0 - 11 (0 is january)



// !#### Setting Information:

let currentDate = new Date()



// *1 SetDate

// currentDate.setDate(20)
// console.log(currentDate.getDate())


// *2 setMonth()

// currentDate.setMonth(5)
// console.log(currentDate.getMonth())  // 0 - 11 (0 is january)


// *3. setFullYear()

// currentDate.setFullYear(2022)

// console.log(currentDate.getFullYear())


// *#### Formatting:

// let formatedDate = currentDate.toLocaleString("en-IN",{
//    day: "numeric",
//     month: "long",
//     year: "numeric",
// })
// console.log(formatedDate)


let isoDateString = currentDate.toISOString(); // Returns a string in ISO format.
console.log(isoDateString)