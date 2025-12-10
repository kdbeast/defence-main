console.log("Hello World Starts");
// const p1 = fetch("https://api.github.com/users");
// console.log(p1);
// const p2 = p1.then((response) => response.json());
// p2.then((data) => console.log(data));

// fetch("https://api.github.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const parent = document.getElementById("first");

//     for (let i = 0; i < data.length; i++) {
//       const img = document.createElement("img");
//       img.src = data[i]?.avatar_url;
//       img.style.width = "150px";
//       img.style.height = "150px";
//       img.style.objectFit = "cover";
//       img.style.borderRadius = "50%";
//       img.style.margin = "10px";
//       img.style.border = "2px solid white";
//       parent.append(img);
//     }
//   })
//   .catch((err) => {
//     const parent = document.getElementById("first");
//     parent.textContent = err;
//   });

// const data = {
//   name: "Karan",
//   age: 20,
//   city: "Delhi",
// };

// const jsonFormat = JSON.stringify(data);
// console.log(jsonFormat);

// Zomato Application

const orderDetails = {
  orderId: 123456,
  foodName: ["Burger", "Pizza", "Pasta"],
  foodPrice: 200,
  foodQuantity: 2,
  customerDetails: {
    name: "John Doe",
    address: "#39/11 Main St",
    phone: "1234567890",
  },
  restaurantDetails: {
    name: "Burger King",
    address: "123 Main Road",
    phone: "1234567890",
  },
};

function placedOrder(orderDetails) {
  console.log(`Order is placed for ${orderDetails.foodName}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `${orderDetails.customerDetails.name}'s Payment of ₹${orderDetails.foodPrice} is received and order is placed`
      );
      resolve(orderDetails);
    }, 2000);
  });
}

function preparingOrder(orderDetails) {
  console.log(`Your food preparation started for ${orderDetails.foodName}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Your food is ready");
      resolve(orderDetails);
    }, 5000);
  });
}

function pickupOrder(orderDetails) {
  console.log(
    `Delivery person is on the way to pick up your food from ${orderDetails.restaurantDetails.name} at ${orderDetails.restaurantDetails.address}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Food is picked up");
      resolve(orderDetails);
    }, 6000);
  });
}

function foodDelivered(orderDetails) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `Food is delivered to ${orderDetails.customerDetails.name} at ${orderDetails.customerDetails.address}`
      );
      resolve(orderDetails);
    }, 8000);
  });
}

placedOrder(orderDetails)
  .then(() => preparingOrder(orderDetails))
  .then(() => pickupOrder(orderDetails))
  .then(() => foodDelivered(orderDetails))
  .catch((err) => console.log(err));

console.log("Hello World Ends");
