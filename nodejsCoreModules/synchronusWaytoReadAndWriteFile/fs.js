/**A. synchronus way
 *
 * file read/ I/O intensive task -> single thread -> not go thread pool
 *
 */

/**B. asynchronous way
 *
 * file read -> single thread -> event loop -> thread pool -> task completion
 *
 */

const fs = require("fs");

// console.log("task 01");

const text = "Learning File System";

fs.writeFileSync("./hello.txt", text);

// console.log("task 02");

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

// console.log("task 03");

console.log(data);
