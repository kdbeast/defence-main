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

function placedOrder(orderDetails, callback) {
  console.log(`Order is placed for ${orderDetails.foodName}`);

  setTimeout(() => {
    console.log(
      `${orderDetails.customerDetails.name}'s Payment of ₹${orderDetails.foodPrice} is received and order is placed`
    );
    callback(orderDetails);
  }, 2000);
}

function preparingOrder(orderDetails, callback) {
  console.log(`Your food preparation started for ${orderDetails.foodName}`);

  setTimeout(() => {
    console.log("Your food is ready");
    callback(orderDetails);
  }, 5000);
}

function pickupOrder(orderDetails, callback) {
  console.log(
    `Delivery person is on the way to pick up your food from ${orderDetails.restaurantDetails.name} at ${orderDetails.restaurantDetails.address}`
  );

  setTimeout(() => {
    console.log("Food is picked up");
    callback(orderDetails);
  }, 6000);
}

function foodDelivered(orderDetails) {
  setTimeout(() => {
    console.log(
      `Food is delivered to ${orderDetails.customerDetails.name} at ${orderDetails.customerDetails.address}`
    );
  }, 8000);
}

placedOrder(orderDetails, () => {
  preparingOrder(orderDetails, () => {
    pickupOrder(orderDetails, () => {
      foodDelivered(orderDetails);
    });
  });
});
