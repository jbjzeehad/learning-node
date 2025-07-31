((require, module, __dirname, __filename) => {
  let a = 60;
  ((name) => {
    let a = 10; //block scope
    console.log(`Learning ${name}`);
  })("node");
  console.log(a);
  console.log(module);
  console.log(__dirname);
  console.log(__filename);
})(require, module, __dirname, __filename);
