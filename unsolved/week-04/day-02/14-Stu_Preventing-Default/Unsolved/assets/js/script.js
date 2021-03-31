const totalAmountInputElement = document.getElementById("totalAmount");
const tipPercentageInputElement = document.getElementById("tipPercentage");
const tipGeneratorFormElement = document.getElementById("tipGenerator");
const containerElement = document.querySelector(".container");

const calculateTip = (totalAmount, tipPercentage) => {
  // Logic TODO later
  return 2;
};

const displayAmount = (tip, total) => {
  const divElement = document.createElement("div");
  const tipH3Element = document.createElement("h3");
  const totalH3Element = document.createElement("h3");

  divElement.setAttribute("class", "tip-area");
  tipH3Element.textContent = "Tip Amount: " + tip;
  totalH3Element.textContent = "Total: " + total;

  divElement.appendChild(tipH3Element);
  divElement.appendChild(totalH3Element);

  containerElement.appendChild(divElement);
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const totalAmount = parseInt(totalAmountInputElement.value, 10);
  const tipPercentage = parseInt(tipPercentageInputElement.value, 10);

  const tip = calculateTip(totalAmount, tipPercentage);
  const total = totalAmount + tip;

  displayAmount(tip, total);
};

tipGeneratorFormElement.addEventListener("submit", onFormSubmit);
