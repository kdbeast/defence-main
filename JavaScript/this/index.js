// this call apply bind
// this: class object method
// strict mode vs non-strict mode

// this keyword in global scope: NodeJS(Empty Object), in Browser(window) it points to global object
// globalThis points to global object of the environment

// console.log(window); // window
// console.log(global); // node
// console.log(globalThis); // both

// normal function: without strict mode it points to global object
// with strict mode it points to undefined
// function foo() {
//   console.log(this);
// }
// foo();

// const user = {
//   name: "Karan",
//   age: 20,
// };

const user2 = {
  name: "John",
  age: 30,
};

function greet() {
  console.log(this.name);
}

// greet.call(user); // Karan

function increment(val, name) {
  this.age += val;
  this.name = name;
  console.log(this.age, this.name);
}

// increment.call(user, 10);
// increment.apply(user, [10, "John"]);

const incrementBind = increment.bind(user, 10, "John");
incrementBind();
console.log(incrementBind);

// call, apply, bind this point to invoking object

// class

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(this.name);
  }
}

const user = new User("Karan", 20);

// Arrow function does not have their own (this)
// arrow function takes (this) from its lexical environment

// (this) keyword: Global scope in nodeJS: {}
// Window: window object

// function: (this) keyword, if someone has invoked (this) method/function then (this) will point to that object
// Normal function: when no one is invoking it then it will point to global object
// Arrow function: it will take (this) from its lexical environment

console.log(this);
