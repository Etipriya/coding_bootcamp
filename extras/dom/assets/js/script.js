const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");
const containerDiv = document.getElementById("container");
const mainDiv = document.getElementById("main");
const inputElement = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const oddEvenDiv = document.getElementById("oddEvenDiv");

const setThemeToLightMode = function () {
  containerDiv.setAttribute("class", "container container-light");
  mainDiv.setAttribute("class", "content content-light");
};

const setThemeToDarkMode = function () {
  containerDiv.setAttribute("class", "container container-dark");
  mainDiv.setAttribute("class", "content content-dark");
};

const checkIfOddOrEven = function () {
  const numberString = inputElement.value;
  const number = parseInt(numberString, 10);
  const h3Element = document.createElement("h3");

  if (number % 2 === 0) {
    setThemeToDarkMode();
    h3Element.textContent = "Result is EVEN";
  } else {
    setThemeToLightMode();
    h3Element.textContent = "Result is ODD";
  }

  oddEvenDiv.appendChild(h3Element);
};

lightBtn.addEventListener("click", setThemeToLightMode);
darkBtn.addEventListener("click", setThemeToDarkMode);
submitBtn.addEventListener("click", checkIfOddOrEven);
