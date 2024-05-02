// async function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Failed to fetch data");
//             }
//         }, 1000);
//     });
// }

// //
// // way_1
// // fetchData().then((value) => {
// //     console.log(value)
// // }).catch((error) => {
// //     console.error(error)
// // })  


// // way_2 = async/await

// async function getData(){

//   try {
//     const response = await fetchData();
//     console.log(response)
    
//   } catch (error) {
//     console.error(error)
//   }

// }


// getData()


async function getUserData()
{
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data)
    
   } catch (error) {
        console.error(error)
   }
   finally{
       console.log("Fetching done")
   }

}

getUserData()