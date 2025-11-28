// DSA
let a = 11;
let b = 22;
let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);

let lenght = 5;
let breadth = 10;
let area = lenght * breadth;
let perimeter = 2 * (lenght + breadth);

// console.log("Area of rectangle is", area);
// console.log("Perimeter of rectangle is", perimeter);

// area of triangle by heron's formula
let side1 = 3;
let side2 = 4;
let side3 = 5;
let s = (side1 + side2 + side3) / 2;
let areaTriangle = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

// console.log("Area of triangle is", areaTriangle);
// console.log("Perimeter of triangle is", side1 + side2 + side3);

// circumference of circle
let radius = 7;
let circumference = 2 * Math.floor(Math.PI) * radius;
let areaCircle = Math.PI * radius * radius;

// console.log("Circumference of circle is", circumference);
// console.log("Area of circle is", areaCircle);

let unit = 508;
let bill = 0;

if (unit > 400) {
  bill += (unit - 400) * 13;
  unit = 400;
}
if (unit <= 400 && unit > 200) {
  bill += (unit - 200) * 8;
  unit = 200;
}
if (unit <= 200 && unit > 100) {
  bill += (unit - 100) * 6;
  unit = 100;
}

bill += unit * 4; // adding 20% surcharge

// console.log("Total electricity bill is", bill);

let amount = 975881;

if (amount >= 500) {
  // console.log(Math.floor(amount / 500), "notes of 500");
  amount = amount % 500;
}
if (amount >= 200) {
  // console.log(Math.floor(amount / 200), "notes of 200");
  amount = amount % 200;
}
if (amount >= 100) {
  // console.log(Math.floor(amount / 100), "notes of 100");
  amount = amount % 100;
}
if (amount >= 50) {
  // console.log(Math.floor(amount / 50), "notes of 50");
  amount = amount % 50;
}
if (amount >= 20) {
  // console.log(Math.floor(amount / 20), "notes of 20");
  amount = amount % 20;
}
if (amount >= 10) {
  // console.log(Math.floor(amount / 10), "notes of 10");
  amount = amount % 10;
}
if (amount >= 5) {
  // console.log(Math.floor(amount / 5), "notes of 5");
  amount = amount % 5;
}
if (amount >= 2) {
  // console.log(Math.floor(amount / 2), "notes of 2");
  amount = amount % 2;
}
if (amount === 1) {
  // console.log(amount, "notes of 1");
  amount = amount % 1;
}

let num = 0.1 + 0.2;
num = num.toFixed(2);
num = parseFloat(num);
// console.log(num);

// console.log(19 % 10);

var reverseNumber = 0;
var number = 12345;

while (number > 0) {
  var digit = number % 10;
  reverseNumber = reverseNumber * 10 + digit;
  number = Math.floor(number / 10);
}

// console.log("Reversed Number is", reverseNumber);

let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(" *");
  }
  // console.log();
}

let z = 26;
for (let i = 1; i <= z; i++) {
  let char = 65;
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(String.fromCharCode(char) + " ");
    char++;
  }
  // console.log();
}

let m = 1;
for (let i = 5; i >= m; i--) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(" *");
  }
  // console.log();
}

// inverted
let k = 5;

for (let i = 1; i <= k; i++) {
  for (let j = k; j >= i + 1; j--) {
    // process.stdout.write("  ");
  }

  for (let j = 1; j <= i; j++) {
    // process.stdout.write(" *");
  }

  // console.log();
}

// pyramid
let l = 5;
for (let i = 1; i <= l; i++) {
  for (let j = 1; j <= l - i; j++) {
    // process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(" *");
  }
  // console.log();
}

// x pattern
let x = 5;
for (let i = 1; i <= x; i++) {
  for (let j = 1; j <= x; j++) {
    if (i === j || i + j === x + 1) {
      // process.stdout.write(" *");
    } else {
      // process.stdout.write("  ");
    }
  }
  // console.log();
}

// v pattern
let v = 5;
for (let i = 1; i <= v; i++) {
  for (let j = 1; j <= v * 2 - 1; j++) {
    if (i === j || i + j === v * 2) {
      process.stdout.write(" *");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
