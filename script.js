let displayValue = "0";
let firstOperand = "";
let secondOperand = "";
let operator = "";
let operatorLastPressed = false;

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
      break;
    case "subtract":
      return subtract(a, b);
      break;
    case "multiply":
      return multiply(a, b);
      break;
    case "divide":
      return divide(a, b);
      break;
  }
}

function clearMemory() {
  displayValue = "0";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  operatorLastPressed = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

updateDisplay();

function inputDigit(digit) {
  if (operatorLastPressed) {
    operatorLastPressed = false;
    displayValue = digit;
  } else if (displayValue === "0") {
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

function changeSign() {
  if (displayValue !== "0") {
    displayValue =
      displayValue.charAt(0) === "-"
        ? displayValue.substring(1)
        : "-" + displayValue;
  }
  updateDisplay();
}

function inputPercent() {
  if (displayValue !== "0") {
    displayValue = displayValue / 100;
  }
  updateDisplay();
}

function inputOperator(op) {
  operatorLastPressed = true;
  if (firstOperand === "") {
    firstOperand = displayValue;
    operator = op;
  } else if (operator === "") {
    operator = op;
  } else if (op !== "equals") {
    secondOperand = displayValue;
    displayValue = operate(
      operator,
      Number(firstOperand),
      Number(secondOperand)
    );
    firstOperand = displayValue;
    operator = op;
    secondOperand = "";
  } else if (op === "equals" && operator !== "" && operator !== "equals") {
    secondOperand = displayValue;
    displayValue = operate(
      operator,
      Number(firstOperand),
      Number(secondOperand)
    );
    firstOperand = displayValue;
    secondOperand = "";
    operator = "";
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

  // Handle special functions
  if (target.classList.contains("func")) {
    switch (action) {
      case "clear":
        clearMemory();
        break;
      case "sign":
        changeSign();
        break;
      case "percent":
        inputPercent();
        break;
    }
  }

  // Handle operators
  else if (target.classList.contains("op")) {
    inputOperator(action);
  }
});
