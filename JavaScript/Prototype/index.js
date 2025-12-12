// Prototype

const obj = {
  name: "Karan",
  age: 20,
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

const obj2 = {
  name: "Pranav",
  age: 40,
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

// console.log(obj.greet());
// obj.greet();

// console.log(obj.hasOwnProperty("names"));
// console.log(obj.toString());

const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hello Mr.${this.name}`);
  }
}

const person1 = new Person("Karan", 20);
const person2 = new Person("Pranav", 40);
const person3 = new Person("Rahul", 30);
// person1.sayHi();
// person2.sayHi();
// person3.sayHi();

class Customer extends Person {
  constructor(name, age, account, balance) {
    super(name, age);
    this.account = account;
    this.balance = balance;
  }
  checkBalance() {
    console.log(`Your balance is ${this.balance}`);
  }
}

const c1 = new Customer("Karan", 20, "1234567890", 1000);
c1.checkBalance();
c1.sayHi();
