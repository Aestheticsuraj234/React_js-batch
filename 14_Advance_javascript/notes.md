Template strings, also known as template literals, are a feature introduced in ECMAScript 6 (ES6) that provide a more convenient way to work with strings in JavaScript. They allow for embedding expressions inside strings, making string interpolation and multiline strings easier to work with. Here are some key points about template strings along with coding examples:

1. **String Interpolation**: Template strings allow you to embed expressions directly inside the string using `${}` syntax.

```javascript
const name = "Alice";
const age = 30;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// Output: Hello, my name is Alice and I am 30 years old.
```

2. **Multiline Strings**: With template strings, multiline strings can be created without the need for escape characters like `\n`.

```javascript
const multilineString = `This is a multiline
string created using
template literals.`;
console.log(multilineString);
/*
Output:
This is a multiline
string created using
template literals.
*/
```

3. **Tagged Templates**: Template strings can be tagged with a function that processes the template string and its substitutions.

```javascript
function tagFunction(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values); // Array of substitution values
  return "Processed string";
}

const result = tagFunction`Hello, ${name}!`;
console.log(result); // Output: Processed string
```

4. **Expression Evaluation**: Expressions inside `${}` are evaluated, which allows for executing JavaScript code within the string.

```javascript
const x = 10;
const y = 20;
console.log(`The sum of ${x} and ${y} is ${x + y}.`);
// Output: The sum of 10 and 20 is 30.
```

5. **Escaping Characters**: Template strings allow backticks to be used within the string by escaping them with a backslash.

```javascript
const message = `A backtick inside a template string: \` `;
console.log(message); // Output: A backtick inside a template string: `
```

Rest and spread operators are two powerful features introduced in ECMAScript 6 (ES6) that greatly enhance the flexibility and readability of JavaScript code. Let's explore each of them with coding examples:

1. **Rest Operator (...)**:

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. It collects all the remaining arguments into an array, making it easier to work with functions that can accept a variable number of arguments.

```javascript
// Example: Function to calculate the sum of all arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15));   // Output: 30
```

In this example, the `sum` function accepts any number of arguments and calculates their sum using the rest parameter `...numbers`.

2. **Spread Operator (...)**:

The spread operator allows an iterable (like an array) to be expanded into individual elements. It is particularly useful in array literals, function calls, and more.

```javascript
// Example: Combining arrays using the spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

In this example, the spread operator `...arr1` and `...arr2` expand the arrays `arr1` and `arr2`, respectively, into individual elements, which are then combined into a new array `combinedArray`.

```javascript
// Example: Copying an array using the spread operator
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]
```

In this example, the spread operator `...originalArray` copies all elements from `originalArray` into a new array `copiedArray`.

```javascript
// Example: Passing array elements as arguments to a function
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
```

In this example, the spread operator `...numbers` expands the array `numbers` into individual elements, which are then passed as arguments to the `sum` function.

Rest and spread operators are powerful tools that enhance the readability and flexibility of JavaScript code, especially when working with functions that accept a variable number of arguments or when combining or copying arrays. They are widely used in modern JavaScript development.