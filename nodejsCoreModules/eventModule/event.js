const EventEmitter = require("node:events"); //common js

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  //callback function
  console.log("Yahoo!! Class Sesh!");
});

schoolBell.on("ring", () => {
  //callback function
  console.log("Oh!! we have another class!");
});

schoolBell.on("broken", () => {
  //callback function
  console.log("Oh no!! Class ki r Sesh hobena!");
});

schoolBell.on("broken", () => {
  //callback function
  console.log("Yes!! next class r kora lagbena!");
});

schoolBell.emit("ring");

schoolBell.emit("broken");
