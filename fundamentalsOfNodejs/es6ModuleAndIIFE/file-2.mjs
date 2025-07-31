const a = 10;

const b = 20;

const c = 30;

const add = (param1, param2) => param1 + param2;

// module.exports = { a, b, add };

export { a, b };

// export default add;

export default {
  add,
  c,
};

// console.log(module);
