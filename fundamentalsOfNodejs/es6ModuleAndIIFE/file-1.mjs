// const var1 = require("./file-2.js");

// import var1 from "./file-2.mjs";

// const { a, b, add } = require("./file-2.js");

import ADD, { a, b } from "./file-2.mjs";

// const { a: a3, b: b3, add: add3 } = require("./file-3.js");

import { a as a3, add as add3, b as b3 } from "./file-3.mjs";

console.log(a);

// console.log(var1.a);

console.log(a3);

console.log(b);

// console.log(var1.b);

console.log(b3);

// console.log(ADD(4, 5));

console.log(ADD.add(4, 5));

// console.log(var1.add(5, 5));

console.log(add3(3, 4, 5));

console.log(ADD.c);
