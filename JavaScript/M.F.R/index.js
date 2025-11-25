// forEach

const arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach((num) => {
  sum += num;
});

// console.log(sum);

// filter

const filteredArr = arr.filter((num) => {
  return num > 2;
});

// console.log(filteredArr);

// map

const mappedArr = arr.map((num) => {
  return num * 2;
});

// console.log(mappedArr);

// reduce

const reducedArr = arr.reduce((acc, num) => {
  return acc + num;
});

// console.log(reducedArr);

const products = [
  { id: 1, name: "Product 1", price: 1 },
  { id: 2, name: "Product 2", price: 2 },
  { id: 3, name: "Product 3", price: 3 },
  { id: 4, name: "Product 4", price: 4 },
  { id: 5, name: "Product 5", price: 5 },
  { id: 6, name: "Product 6", price: 6 },
  { id: 7, name: "Product 7", price: 7 },
  { id: 8, name: "Product 8", price: 8 },
  { id: 9, name: "Product 9", price: 9 },
  { id: 10, name: "Product 10", price: 10 },
];

const answer = products
  .filter((product) => product.price % 2 !== 0)
  .map((product) => ({ name: product.name, price: product.price }));

// console.log(answer);

// custom array method

Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const customMappedArr = arr.customMap((num) => {
  return num * 1000;
});

// console.log(customMappedArr);

// set: unique values ko store karta hai

const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(set);

set.add(11);
set.delete(1);
console.log(set);

const email = ["karanJ", "karanD", "karanM", "karanJ"];
const uniqueEmail = [...new Set(email)];
console.log(uniqueEmail);
