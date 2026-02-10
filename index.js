// DSA
// let a = 11;
// let b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);

// let lenght = 5;
// let breadth = 10;
// let area = lenght * breadth;
// let perimeter = 2 * (lenght + breadth);

// console.log("Area of rectangle is", area);
// console.log("Perimeter of rectangle is", perimeter);

// area of triangle by heron's formula
// let side1 = 3;
// let side2 = 4;
// let side3 = 5;
// let s = (side1 + side2 + side3) / 2;
// let areaTriangle = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

// console.log("Area of triangle is", areaTriangle);
// console.log("Perimeter of triangle is", side1 + side2 + side3);

// circumference of circle
// let radius = 7;
// let circumference = 2 * Math.floor(Math.PI) * radius;
// let areaCircle = Math.PI * radius * radius;

// console.log("Circumference of circle is", circumference);
// console.log("Area of circle is", areaCircle);

// let unit = 508;
// let bill = 0;

// if (unit > 400) {
//   bill += (unit - 400) * 13;
//   unit = 400;
// }
// if (unit <= 400 && unit > 200) {
//   bill += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit <= 200 && unit > 100) {
//   bill += (unit - 100) * 6;
//   unit = 100;
// }

// bill += unit * 4; // adding 20% surcharge

// console.log("Total electricity bill is", bill);

// let amount = 975881;

// if (amount >= 500) {
//   console.log(Math.floor(amount / 500), "notes of 500");
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log(Math.floor(amount / 200), "notes of 200");
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log(Math.floor(amount / 100), "notes of 100");
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log(Math.floor(amount / 50), "notes of 50");
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log(Math.floor(amount / 20), "notes of 20");
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log(Math.floor(amount / 10), "notes of 10");
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log(Math.floor(amount / 5), "notes of 5");
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log(Math.floor(amount / 2), "notes of 2");
//   amount = amount % 2;
// }
// if (amount === 1) {
//   console.log(amount, "notes of 1");
//   amount = amount % 1;
// }

// let num = 0.1 + 0.2;
// num = num.toFixed(2);
// num = parseFloat(num);
// console.log(num);

// console.log(19 % 10);

// var reverseNumber = 0;
// var number = 12345;

// while (number > 0) {
//   var digit = number % 10;
//   reverseNumber = reverseNumber * 10 + digit;
//   number = Math.floor(number / 10);
// }

// console.log("Reversed Number is", reverseNumber);

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(" *");
//   }
//   console.log();
// }

// let z = 26;
// for (let i = 1; i <= z; i++) {
//   let char = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(char) + " ");
//     char++;
//   }
//   console.log();
// }

// let m = 1;
// for (let i = 5; i >= m; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(" *");
//   }
//   console.log();
// }

// inverted
// let k = 5;

// for (let i = 1; i <= k; i++) {
//   for (let j = k; j >= i + 1; j--) {
//     process.stdout.write("  ");
//   }

//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(" *");
//   }

//   console.log();
// }

// pyramid
// let l = 5;
// for (let i = 1; i <= l; i++) {
//   for (let j = 1; j <= l - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(" *");
//   }
//   console.log();
// }

// x pattern
// let x = 5;
// for (let i = 1; i <= x; i++) {
//   for (let j = 1; j <= x; j++) {
//     if (i === j || i + j === x + 1) {
//       process.stdout.write(" *");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// v pattern
// let v = 5;
// for (let i = 1; i <= v; i++) {
//   for (let j = 1; j <= v * 2 - 1; j++) {
//     if (i === j || i + j === v * 2) {
//       process.stdout.write(" *");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// sorting array using for loop
// let arr = [5, 2, 8, 1, 9, 3, 7, 4];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// Sorting array using while loop

// const arr1 = [0, 1, 0, 1, 1, 0, 1, 0];
// let i = 0;
// let j = 0;
// while (i < arr1.length) {
//   if (arr1[i] === 0) {
//     let temp = arr1[i];
//     arr1[i] = arr1[j];
//     arr1[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr1);

// Rotation

// let arr2 = [1, 2, 3, 4, 5];
// let copy = arr2[0];

// for (let i = 0; i < arr2.length; i++) {
//   arr2[i] = arr2[i + 1];
// }
// arr2[arr2.length - 1] = copy;

// console.log(arr2);

// let arr3 = [1, 2, 3, 4, 5];
// let copy2 = arr3[arr3.length - 1];

// for (let i = arr3.length - 1; i >= 0; i--) {
//   arr3[i] = arr3[i - 1];
// }
// arr3[0] = copy2;
// console.log(arr3);

// loop inside loop

// for (let i = 1; i <= 5; i++) {
//   console.log(`Execution ${i}`);

//   for (let j = 1; j <= 3; j++) {
//     console.log("Hello World");
//   }
// }

// loop and rotation

// let arr4 = [1, 2, 3, 4, 5];
// let userValue = 2;
// userValue = userValue % arr4.length;

// for (let i = 0; i < userValue; i++) {
//   let copy = arr4[0];

//   for (let j = 0; j < arr4.length; j++) {
//     arr4[j] = arr4[j + 1];
//   }
//   arr4[arr4.length - 1] = copy;
// }

// console.log(arr4);

// let arr5 = [1, 2, 3, 4, 5];
// let vg = 2;
// vg = vg % arr5.length;

// for (let i = 0; i < vg; i++) {
//   let copy2 = arr5[arr5.length - 1];

//   for (let j = arr5.length - 1; j >= 0; j--) {
//     arr5[j] = arr5[j - 1];
//   }
//   arr5[0] = copy2;
// }

// console.log(arr5);

// let arr6 = [1, 2, 3, 4, 5];
// let temp = new Array(arr6.length);
// let vg = 3;
// vg = vg % arr6.length;

// for (let i = 0; i < arr6.length; i++) {
//   temp[i] = arr6[(i + vg) % arr6.length];
// }

// console.log(temp);

// let arr7 = [1, 2, 3, 4, 5];
// let temp2 = new Array(arr7.length);
// let vg2 = 3;
// vg2 = vg2 % arr7.length;

// for (let i = arr7.length - 1; i >= 0; i--) {
//   temp2[i] = arr7[(i + vg2) % arr7.length];
// }

// console.log(temp2);

// 1. data types
console.log("null");
console.log("number");
console.log("string");
console.log("Symbol");
console.log("BigInt");
console.log("Boolean");
console.log("undefined");
console.log("object");

// 2. type coercion
console.log(1 == "1");
console.log(1 === "1");

// 3. null & undefined
let obj = null;
console.log(obj);
let undef;
console.log(undef);

// 4. hoisting
console.log(a, "hoisting");
var a = 10;
console.log(a, "hoisting");

// function hoisting
console.log(add(10, 20), "function hoisting");
function add(a, b) {
  return a + b;
}
console.log(add(10, 20), "function hoisting");

// let & const
// console.log(b, "let"); cannot access before initialization
let b = 10;
console.log(b, "let");

// function expression
// console.log(add(10, 20), "function expression"); cannot access before initialization
var add = function (a, b) {
  return a + b;
};
console.log(add(10, 20), "function expression");

// 5. var, let, const
console.log(x, "var");
var x = 10;
console.log(x, "var");

// console.log(y, "let"); cannot access before initialization
let y = 10;
console.log(y, "let");

// console.log(z, "const"); cannot access before initialization
const z = 10;
console.log(z, "const");

// object
let object = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(object);

// 6. 7. 8. variable scope
let global = 10;
function inner() {
  let local = 20;
  console.log(global, "global");
  console.log(local, "local");
}
inner();
console.log(global, "global");
// console.log(local, "local"); it will throw error because local is not defined in global scope

// 10. closure
function closure(greet) {
  let counter = 0;
  return function innerFunc(name) {
    counter++;
    console.log(`${greet} ${name} has ${counter} apples`);
  };
}

let innerValue = closure("Good Morning");
let innerValue2 = closure("Good Afternoon");
innerValue("John");
innerValue("Bob");
innerValue2("Doe");
innerValue("Alice");

// 11. functions types

// 15. Normal Function
// 14. Pure Function
function add(a, b) {
  return a + b;
}

// 15. Function Expression
let adding = function (a, b) {
  return a + b;
};

// Arrow Function
let yo = (name) => console.log(`Yo Yo ${name}!`);
yo("Karan");

// Impure Function
let counter = 0;
function increment() {
  counter++;
  return counter;
}
console.log(increment());
console.log(increment());
console.log(increment());

// 12. Higher Order Function
function higherOrderFunction(callback) {
  return callback;
}

const multiply = (a, b) => a * b;
const added = (a, b) => a + b;

console.log(higherOrderFunction(multiply)(20, 3));
console.log(higherOrderFunction(added)(25, 3));

// 16. IIFE Function
(function instant() {
  let private = "I am private";
  console.log("IIFE is running");
  console.log(private);
})();

// console.log(private);

// 17. Objects

// Object literal notation
let obj1 = {
  name: "Happy",
  age: 26,
  greet: function () {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
  },
};

obj1.greet();

// Constructor Function
function Person(name, hobby) {
  this.name = name;
  this.hobby = hobby;
  this.work = function () {
    console.log(`My name is ${name} and my hobby is ${hobby}`);
  };
}

let wow = new Person("Divine", "Rapping");
// wow.work();

// Object.create()
let persoon = {
  greet: function () {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
  },
};
let person2 = Object.create(persoon);
person2.name = "John";
person2.age = 30;
person2.city = "New York";
person2.greet();

// ES6 class syntax
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    };
  }
}
let person3 = new PersonClass("Divine", 35);
person3.greet();

// 18. add/remove
object.modal = "Ford";
object.year = 100;
object["city"] = "Jaipur";
delete object.city;
// console.log(object);

// 19. property check
let person = {
  name: "Alice",
  age: 25,
};

// using the in operator
console.log("name" in person);
console.log("gender" in person);

// using the hasOwnProperty method
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("gender"));

// using undefined check
console.log(person.name !== undefined);
console.log(person.gender !== undefined);

// optional chaining
console.log(person?.name);
console.log(person?.gender);
console.log(person?.age);

// 20. this keyword
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("John", 30);
console.log(person1.name);
console.log(person1.age);

// 21. looping array
const fruits = ["Apple", "Mango", "Watermelon", "Chiku"];

// 1
for (let i = 0; i < fruits.length; i++) {
  console.log("for loop", fruits[i]);
}

// 2
fruits.forEach((fruit) => {
  console.log("forEach", fruit);
});

// 22. 3 for arrays
for (const fruit of fruits) {
  console.log("for of", fruit);
}

// 22. 4 for objects
for (const index in fruits) {
  console.log("for in", fruits[index]);
}

// 4
fruits.map((fruit) => {
  console.log("map", fruit.toUpperCase());
});

// 5
let i = 0;
while (i < fruits.length) {
  console.log("while", fruits[i]);
  i++;
}

// 6
let j = 0;
do {
  console.log("do while", fruits[j]);
  j++;
} while (j < fruits.length);

// 23. add/remove
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits.unshift("Strawberry");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.splice(1, 0, "Kiwi");
console.log(fruits);

// 24. map
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNum = numbers.map((number) => {
  return number * 2;
});
console.log(doubleNum);

const numberObj = numbers.map((number) => {
  return { value: number, sqr: number * number };
});
console.log(numberObj);

// 25. filter = returns a new array containing all elements that satisfies the condition
const evenNum = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNum);

// find = returns the first element that satisfies the condition
const first = numbers.find((number) => {
  return number % 2 === 0;
});
console.log(first);

// 26. some = returns true if at least one element satisfies the condition
const hasEven = numbers.some((number) => {
  return number % 2 === 0;
});
console.log(hasEven);

// every = returns true if all elements satisfies the condition
const allEven = numbers.every((number) => {
  return number % 2 === 0;
});
console.log(allEven);

/*
<div id="divId" class="divClass">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</div>
*/

// 27. DOM Manipulation

// 1 select by id
// const div = document.getElementById("divId");

// 2 select by class
// const divClass = document.getElementsByClassName("divClass");

// 3 select by tag name
// const para = document.getElementsByTagName("p");

// 4 select by query
// const divQuery = document.querySelector("#divId");

// 5 select by query all
// const divQueryAll = document.querySelectorAll(".divClass");

// 28 create/append

// 1 create element
// const newElement = document.createElement("p");
// newElement.textContent = "New Paragraph";
// div.appendChild(newElement);

// 2 append element
// const newElement2 = document.createElement("p");
// newElement2.textContent = "New Paragraph 2";
// div.appendChild(newElement2);

// 29. innerHTML vs textContent

// innerHTML = it will render the html tags
// newElement.innerHTML = "<b>New Paragraphhh</b>";

// textContent = it will not render the html tags
// newElement.textContent = "<b>Newwww Paragrrraphhh</b>";

// 30. remove

// 1 using remove
// newElement.remove();

// 2 using removeChild
// div.removeChild(newElement2);

// 3 setting inner html to empty string
// document.getElementById("divId").innerHTML = "";

// 31. arrow function vs normal function

// normal function
//  -it has its own this keyword
function normalFunction() {
  console.log(this, "normal");
}
normalFunction();

// arrow function
//  -concise syntax
//  -this refers to global/window object
//  -arrow function does not have its own this keyword
const arrowFunction = () => {
  console.log(this, "arrow");
};
arrowFunction();

// 32. Destructuring

// array destructuring
//  -it allows to extract values from arrays and assign them to variables
const [m, n, o] = [1, 2, 3];
console.log(m, n, o);

// object destructuring
//  -it allows to extract values from objects and assign them to variables
const { name, age, city } = { name: "John", age: 30, city: "New York" };
console.log(name, age, city);

// 33. template literals
const naming = "John";
const aging = 30;
const citying = "New York";
console.log(
  `Hello my name is ${naming} and my age is ${aging} and my city is ${citying}`,
);

// 34. spread operator
//  -it allows to expand an iterable (array, string, etc.) into individual elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const object1 = { name: "John", age: 30 };
const object2 = { city: "New York", country: "USA" };
const object3 = { ...object1, ...object2 };
console.log(object3);

let original = [1, 2, 3];
let copy = [...original];
console.log(copy);

// 35. default parameters
//  -it allows to provide default values for function parameters
function greet(name = "John") {
  console.log(`Hello ${name}`);
}
greet();
greet("Johnny");

function divide(a, b = 2) {
  return a / b;
}
console.log(divide(10));
console.log(divide(10, 5));

// 36. rest operator
//  -it allows to pass multiple arguments to a function as an array
const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(1, 2, 3, 4, 5));

// 37. callback function
//  -it allows to pass a function as an argument to another function
// function greet(name, callback) {
//   setTimeout(() => {
//     console.log(`Hello ${name}`);
//     callback();
//   }, 2000);
// }

// greet("Kushal", () => {
//   console.log("Callback function");
// });

// callback hell
// function step1(name, callback) {
//   setTimeout(() => {
//     console.log("Step 1");
//     console.log(`Hello ${name}`);
//     callback();
//   }, 1000);
// }
// function step2(name, callback) {
//   setTimeout(() => {
//     console.log("Step 2");
//     console.log(`Hello ${name}`);
//     callback();
//   }, 2000);
// }
// function step3(name, callback) {
//   setTimeout(() => {
//     console.log("Step 3");
//     console.log(`Hello ${name}`);
//     callback();
//   }, 3000);
// }
// function sayGoodbye() {
//   setTimeout(() => {
//     console.log("Step 4");
//     console.log("Goodbye");
//   }, 4000);
// }
// step1("Alice", () => {
//   step2("Bob", () => {
//     step3("Charlie", () => {
//       sayGoodbye();
//     });
//   });
// });

// 38. Promise
//  -it allows to handle asynchronous operations in a more organized way
// function fetchData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         res("Data fetched successfully", 200);
//       } else {
//         rej("Failed to fetch data", 404);
//       }
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// 39. Promise Chaining
function step1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Step 1 ${name}`);
    }, 1000);
  });
}
function step2(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Step 2 ${name}`);
    }, 2000);
  });
}
function step3(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Step 3 ${name}`);
    }, 3000);
  });
}
function sayGoodbye() {
  setTimeout(() => {
    console.log("Goodbye All");
  }, 4000);
}

/*
step1("Alice")
  .then((data) => {
    console.log("Data:", data);
    return step2("Bob");
  })
  .then((data) => {
    console.log("Data:", data);
    return step3("Charlie");
  })
  .then((data) => {
    console.log("Data:", data);
    return sayGoodbye();
  })
  .catch((error) => {
    console.log("Error:", error);
  });
*/

// 40.Promise.all
// Promise.all([step1("Alice"), step2("Bob"), step3("Charlie"), sayGoodbye()])
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })

// 41. Promise.finally
//   .finally(() => {
//     console.log("Finally");
//   });

// 42. Async/Await
async function fetchData() {
  try {
    console.log("Fetching data...");
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=1",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// 46. JSON.stringify
const stringified = { name: "John", age: 30, city: "New York" };
const json = JSON.stringify(stringified);
console.log(json);

// 47. JSON.parse
const parsed = JSON.parse(json);
console.log(parsed);

// 48. Local Storage
localStorage.setItem("username", "John");
console.log(localStorage.getItem("username"));
localStorage.removeItem("username");
localStorage.clear();
