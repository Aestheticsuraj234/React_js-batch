// let myJSON = `{
//     "name": "John",
//     "age": 30,
//     "isStudent": false,
//     "hobbies": ["reading", "gaming"],
//     "address": {
//       "city": "New York",
//       "zipcode": "10001"
//     },
//     "isMarried": null
//   }
//   `

// console.log( myJSON)

// let myOBJ = {
//     name: 'John',
//     age: 30,
//     isStudent: false,
//     hobbies: [ 'reading', 'gaming' ],
//     address: { city: 'New York', zipcode: '10001' },
//     isMarried: null
//   }

// let myJSON2 = JSON.stringify(myOBJ)

// console.log(myJSON2)

fetch('https://api.github.com/users/Aestheticsuraj234')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));'
      
      
      // convert xml to object


      