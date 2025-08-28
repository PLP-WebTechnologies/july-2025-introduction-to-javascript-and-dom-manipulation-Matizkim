// --------------------------------------------
// 🧱 Part 1: Variables, Data Types & Conditionals
// --------------------------------------------

let userName = "Martin";
let userAge = 24;

// Use a conditional to check if user is adult
if (userAge >= 18) {
  document.getElementById("user-status").innerText = `${userName} is an adult.`;
} else {
  document.getElementById("user-status").innerText = `${userName} is a minor.`;
}

// Output greeting using console and DOM
console.log("Welcome, " + userName);
document.getElementById("greeting").innerText = `Welcome, ${userName}!`;


// --------------------------------------------
// 🔁 Part 2: Functions
// --------------------------------------------

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

let total = calculateTotal(500, 3); // Example usage
console.log(`Total price: ${total}`);

// Function 2: Capitalize first letter of a name
function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(capitalizeName("john")); // Output: John


// --------------------------------------------
// 🔁 Part 3: Loops
// --------------------------------------------

// Loop 1: Countdown using while
let counter = 5;
while (counter > 0) {
  console.log("Countdown:", counter);
  counter--;
}

// Loop 2: Display products using forEach
const products = ["Laptop", "Phone", "Tablet", "Keyboard"];
const productList = document.getElementById("product-list");

products.forEach((product) => {
  let li = document.createElement("li");
  li.innerText = product;
  productList.appendChild(li);
});


// --------------------------------------------
// 🌐 Part 4: DOM Interactions
// --------------------------------------------

// DOM Interaction 1: Toggle a message on button click
function toggleMessage() {
  let msg = document.getElementById("toggle-text");
  if (msg.innerText === "Hello, this is a default message.") {
    msg.innerText = "You clicked the button!";
  } else {
    msg.innerText = "Hello, this is a default message.";
  }
}

document.getElementById("toggle-button").addEventListener("click", toggleMessage);