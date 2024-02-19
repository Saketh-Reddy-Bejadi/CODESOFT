// let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

// function clearEntry() {
//   var display = document.getElementById("display");
//   display.value = display.value.slice(0, -1); // Remove the last character
// }

// function allClear() {
//   document.getElementById('display').value = ''; // Clear the entire display
// }

let displayValue = ""; // Variable to store the current value displayed on the screen

// Function to handle AC button click
function handleAC() {
  displayValue = ""; // Clear the display value
  updateDisplay(); // Update the display
}

// Function to handle C button click
function handleC() {
  displayValue = displayValue.slice(0, -1); // Remove the last character from the display value
  updateDisplay(); // Update the display
}

// Function to update the display with the current value
function updateDisplay() {
  document.getElementById("display").value = displayValue; // Update the display with the current value
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = "";
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
