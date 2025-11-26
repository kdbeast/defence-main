// const newElement = document.createElement("h2");
// newElement.textContent = "Strike is coming";
// newElement.id = "second";

// const element = document.getElementById("first");
// element.after(newElement);
// // element.before(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Diwali aa ke chali gyi";
// newElement2.id = "third";
// // newElement2.className = "diwali";
// // newElement2.className += " diwali2";
// newElement2.classList.add("diwali");
// newElement2.classList.add("diwali2");
// newElement2.classList.remove("diwali2");
// newElement2.style.color = "red";
// newElement2.style.backgroundColor = "yellow";
// newElement2.style.fontSize = "30px";
// element.before(newElement2);

// console.log(newElement2);

// const list1 = document.createElement("li");
// list1.textContent = "Milk";
// const list2 = document.createElement("li");
// list2.textContent = "Cake";
// const list3 = document.createElement("li");
// list3.textContent = "Halwa";
// const list4 = document.createElement("li");
// list4.textContent = "Burger";

// const ul = document.getElementById("list");
// ul.append(list1, list2, list4);
// ul.prepend(list3);

// list4.after(list2);

// console.log(ul.children);

// ul.children[2].after(list2);

const arr = ["Milk", "Cake", "Halwa", "Burger", "Pasta","Pepsi"];

const ul = document.getElementById("list");
// const fragment = document.createDocumentFragment();
const arr2 = []

for (let food of arr) {
  const li = document.createElement("li");
  li.textContent = food;
//   fragment.append(li);
arr2.push(li)
}

ul.append(...arr2);

