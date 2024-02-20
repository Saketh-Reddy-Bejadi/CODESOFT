let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function handleAC() {
  displayValue = ""; 
  updateDisplay(); 
}

function handleC() {
  displayValue = displayValue.slice(0, -1); 
  updateDisplay(); 
}

function updateDisplay() {
  document.getElementById("display").value = displayValue; 
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
