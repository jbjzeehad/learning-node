const fs = require("fs");

// fs.readFile("./hello3.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("Something went wrong", err);
//     return;
//   }
//   fs.writeFile("./hello4.txt", data, { encoding: "utf-8" }, (err) => {
//     if (err) {
//       console.log("Something went wrong", err);
//       return;
//     }
//     console.log(`Written Succesfuly`);
//   });
// });

const readStream = fs.createReadStream("./hello3.txt", { encoding: "utf-8" });

const writeStream = fs.createWriteStream("./hello4.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
  console.log(data);

  writeStream.write(data, (err) => {
    if (err) {
      throw Error("Error", err);
    }
  });
});

readStream.on("error", (err) => {
  if (err) {
    throw Error("Error", err);
  }
});

writeStream.on("error", (err) => {
  if (err) {
    throw Error("Error", err);
  }
});

readStream.on("end", () => {
  console.log("reading ended");
  writeStream.end();
});

writeStream.on("finish", () => {
  console.log("written successfuly");
});
