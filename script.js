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

// document.querySelector(".calculator").addEventListener("click", function (e) {
//   let target = e.target;
//   if (target.matches("button")) {
//     let action = target.dataset.action;
//     let key = target.textContent;

//     // Check for digits/decimal
//     if (!action) {
//       if (previousAction === "operator") {
//         previousValue = displayValue;
//         displayValue = "";
//         previousAction = "digit";
//       }
//       if (key === ".") {
//         if (!displayValue.includes(".")) {
//           displayValue += key;
//         }
//       } else if (key === "0") {
//         if (!displayValue.startsWith("0") || displayValue.length > 1) {
//           displayValue += key;
//         }
//       } else if (displayValue.includes(".")) {
//         if (displayValue.length == 1) {
//           displayValue = "0" + displayValue + key;
//         } else {
//           displayValue += key;
//         }
//       } else {
//         displayValue += key;
//       }
//     }

//     // Check for actions
//     else if (action === "clear") {
//       displayValue = "";
//       clearMemory();
//     } else if (action === "sign") {
//       displayValue = multiply(displayValue, -1);
//       clearMemory();
//     } else if (action === "percent") {
//       let result = operate("divide", parseFloat(displayValue), 100);
//       displayValue = result.toString();
//       clearMemory();
//     } else if (
//       action === "add" ||
//       action === "subtract" ||
//       action === "multiply" ||
//       action === "divide" ||
//       action === "equals"
//     ) {
//       if (previousOperator === "") {
//         previousOperator = action;
//         previousValue = displayValue;
//       } else {
//         let result = operate(
//           previousOperator,
//           parseFloat(previousValue),
//           parseFloat(displayValue)
//         );
//         displayValue = result.toString();

//         if (action === "equals") {
//           clearMemory();
//         } else {
//           previousOperator = action;
//           previousValue = displayValue;
//           displayValue = "";
//         }
//       }
//     }

//     document.querySelector("#display").value = displayValue;
//   }
// });
