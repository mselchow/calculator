let displayValue = "0";
let firstOperand = "";
let secondOperand = "";
let operator = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
  }
}

function clearMemory() {
  displayValue = "0";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

updateDisplay();

function inputDigit(digit) {
  if (displayValue === "0") {
    displayValue = digit;
  } else {
    displayValue += digit;
  }
  updateDisplay();
}

function inputDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
}

document.querySelector(".calculator").addEventListener("click", function (e) {
  let target = e.target;
  let action = target.dataset.action;
  let key = target.dataset.key;

  // Handle digits and decimals
  if (target.classList.contains("num")) {
    if (key === ".") {
      inputDecimal();
    } else {
      inputDigit(key);
    }
  }

  // Handle operators
  else if (target.classList.contains("op")) {
    if (operator === "") {
      firstOperand = parseFloat(displayValue);
      operator = action;
    } else {
      secondOperand = parseFloat(displayValue);
      displayValue = operate(operator, firstOperand, secondOperand);
      firstOperand = displayValue;
      operator = target.dataset.action;
    }
    updateDisplay();
  }

  // Handle others
  else if (action === "clear") {
    clearMemory();
  } else if (action === "equals") {
    secondOperand = parseFloat(displayValue);
    displayValue = operate(operator, firstOperand, secondOperand);
    firstOperand = displayValue;
    operator = "";
    updateDisplay();
  }
});
