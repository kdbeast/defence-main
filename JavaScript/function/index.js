// function

function greeting(name) {
  return `Hello, ${name}!`;
}

// console.log(greeting("Alice")); // "Hello, Alice!"
// console.log(greeting("Bob")); // "Hello, Bob!"

function addNum(...num) {
  let sum = 0;
  for (let n of num) {
    sum += n;
  }
  return sum;
}

// console.log(addNum(3244, 4256, 2500));

const arr = [10, 20, 30, 40, 50];
const arr2 = [30, 70, 90, 10];

const [first, second, ...num] = arr;
// console.log(first, second, num);

const ans = [arr, arr2];
// console.log(ans);

// function: expression

const addNum2 = function (num1, num2) {
  return num1 + num2;
};

// arrow function

const addNum3 = () => {
  console.log("Hello Ji");
};

const addNum4 = (num1, num2) => num1 + num2;

// if we have single parameter, no need of this ()
const squareNum = (num) => num * num;

// console.log(addNum4(3, 4));
// console.log(squareNum(6));

const greeting2 = () => {
  return {
    user: "Karan",
    age: 21,
  };
};

const greeting3 = () => ({ user: "Karan", age: 21 });

// console.log(greeting3());

// IIFE

(function greeting4() {
  //   console.log(`Hey, How you doing!`);
})();

// callback

function greet() {
  console.log("Hello ji, Kaise ho");
}

function dance() {
  console.log("I am dancing");
  console.log("I have finished meeting");
}

function meet(callback) {
  callback();
  console.log("I am going to meet someone");
  // dance() hardcore (reusable)
  // code hota jisko marta
}

// meet(greet);
// meet(dance);

function blinkitOrderPlaced() {
  console.log("We have started packing your order");
}

function zomatoOrderPlaced() {
  console.log("We have started preparing your order");
}

function payment(amount, callback) {
  console.log(`${amount} payment has initailized`);
  console.log("Payment is received");
  callback();

  // GST: government
  // Rider ko kitna payment dena
  // company ko kitna
}

// payment(500, zomatoOrderPlaced);
// payment(300, blinkitOrderPlaced);

let global = "Hello";

function greeting5() {
  // let global = "Hello1";
  return global;
}

// console.log(global);
// console.log(greeting5());

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

function createUserAccount() {
  let balance = 1000;

  const features = {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      balance -= amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    },
  };

  return features;
}

let customer = createUserAccount();

console.log(customer.getBalance());
console.log(customer.deposit(200));
console.log(customer.withdraw(1000));
