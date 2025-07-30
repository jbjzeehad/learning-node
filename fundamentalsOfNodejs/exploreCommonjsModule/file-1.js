// const var1 = require("./file-2.js");

// console.log(var1);

// console.log(var1.a);

// console.log(var1.b);

// console.log(var1.add(2, 3));

// destructuring object

const { a, b, add } = require("./file-2.js");

console.log(a);

console.log(b);

console.log(add(3, 4));
