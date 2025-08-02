/**B. asynchronous way
 *
 * file read -> single thread -> event loop -> thread pool -> task completion
 *
 */

const fs = require("fs");

console.log("task 01");

let text = "Some text";

fs.readFile("./hello2.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something went wrong", err);
    return;
  }
  text = data;
  console.log(`Inside the data -> ${text}`);
});

console.log(`Outside the data -> ${text}`);

// console.log(text);

console.log("task 03");
