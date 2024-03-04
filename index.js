// EXAMPLE 1 - Use shorthand for if/else statement in JavaScript

const result1 = 10 > 5 ? 'yes' : 'no';
console.log(result1); // 👉️ 'yes'

const result2 = 10 > 100 ? 'yes' : 'no';
console.log(result2); // 👉️ 'no'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Calling functions in a ternary operator

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(10, 10) > 1 ? sum(5, 5) : sum(1, 1);

// console.log(result); // 👉️ 10

// ------------------------------------------------------------------

// // EXAMPLE 3 - Interpolating strings using a ternary operator

// const color = 'green';

// const str = `color is ${
//   color === 'blue' ? 'blue-100' : 'red-100'
// }`;

// console.log(str); // 👉️ 'color is red-100'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking if an array contains elements using ternary operator

// const result = [].length ? 'contains elements' : 'is empty';

// console.log(result); // 👉️ is empty

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using nested ternary operators

// const result = 1 + 1 === 2 ? (2 > 0 ? 'yes' : 'no') : 'idk';

// console.log(result); // 👉️ yes
