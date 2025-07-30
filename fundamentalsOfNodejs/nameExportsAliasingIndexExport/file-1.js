const var1 = require("./file-2.js");

const { a, b, add } = require("./file-2.js");

const { a: a3, b: b3, add: add3 } = require("./file-3.js");

console.log(a);

console.log(var1.a);

console.log(a3);

console.log(b);

console.log(var1.b);

console.log(b3);

console.log(add(4, 5));

console.log(var1.add(5, 5));

console.log(add3(3, 4, 5));
