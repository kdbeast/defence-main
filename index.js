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

// data types //
console.log("null");
console.log("number");
console.log("string");
console.log("Symbol");
console.log("BigInt");
console.log("Boolean");
console.log("undefined");
console.log("object");

// type coercion //
console.log(1 == "1");
console.log(1 === "1");

// null & undefined //
let obj = null;
console.log(obj);
console.log(undef);
var undef;

// hoisting //
console.log(a, "hoisting");
var a = 10;
console.log(a, "hoisting");

// function hoisting //
console.log(add(10, 20), "function hoisting");
function add(a, b) {
  return a + b;
}
console.log(add(10, 20), "function hoisting");

// let & const //
// console.log(b, "let"); cannot access before initialization
let b = 10;
console.log(b, "let");

// function expression //
// console.log(add(10, 20), "function expression"); cannot access before initialization
var add = function (a, b) {
  return a + b;
};
console.log(add(10, 20), "function expression");

// var, let, const //
console.log(x, "var");
var x = 10;
console.log(x, "var");

// console.log(y, "let"); cannot access before initialization
let y = 10;
console.log(y, "let");

// console.log(z, "const"); cannot access before initialization
const z = 10;
console.log(z, "const");

// object //
let object = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(object);

// variable scope //
let global = 10;
function inner() {
  let local = 20;
  console.log(global, "global");
  console.log(local, "local");
}
inner();
console.log(global, "global");
// console.log(local, "local"); it will throw error because local is not defined in global scope

// closure //
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
