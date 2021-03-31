// Target the buttons
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const counterSpan = document.getElementById("counter");

// Declare global variables
let counter = 0;

// Function to increment when increment button is clicked
const increment = () => {
  counter = counter + 1;
  counterSpan.textContent = counter;
};

// Function to decrement when decrement button is clicked
const decrement = () => {
  if (counter > 0) {
    counter = counter - 1;
    counterSpan.textContent = counter;
  }
};

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
