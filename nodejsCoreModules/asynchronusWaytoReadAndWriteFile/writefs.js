/**B. asynchronous way
 *
 * file read -> single thread -> event loop -> thread pool -> task completion
 *
 */

const fs = require("fs");

console.log("task 01");

let text = "NODE JS"; //node js

fs.writeFile("./hello2.txt", text, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.log("Something went wrong", err);
    return;
  }
  console.log(`Inside the writefile -> ${text}`);
});

fs.readFile("./hello2.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something went wrong", err);
    return;
  }
  text = data;
  console.log(`Inside the readfile -> ${text}`);
});

console.log(`From Console -> ${text}`);

console.log("task 03");
