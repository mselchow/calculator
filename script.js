let displayValue = "";

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

document.querySelector(".calculator").addEventListener("click", function (e) {
  let target = e.target;
  if (target.matches("button")) {
    let action = target.dataset.action;
    let key = target.textContent;
    if (!action) {
      if (key === ".") {
        if (!displayValue.includes(".")) {
          displayValue += key;
        }
      } else if (key === "0") {
        if (displayValue === "0") {
          return;
        } else if (displayValue.includes(".")) {
          displayValue += key;
        } else {
          displayValue += key;
        }
      } else {
        displayValue += key;
      }
    } else if (action === "clear") {
      displayValue = "";
    } else if (action === "sign") {
      displayValue = multiply(displayValue, -1);
    } else if (action === "percent") {
      let result = operate("divide", parseFloat(displayValue), 100);
      displayValue = result.toString();
    }
    document.querySelector("#display").value = displayValue;
  }
});
