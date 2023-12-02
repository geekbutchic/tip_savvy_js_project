"use strict";
/* JS for Light & Dark Toggle */
const toggleSwitch = document.getElementById("toggle");
const body = document.body;

// Tip & Total Selectors * 2
const tipDisplay = document.querySelector(".tip-section span");
const totalDisplay = document.querySelector(".total-section span");
// Input Selectors * 3
const billAmount = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const guestsInput = document.getElementById("people");

// Light & Dark Mode
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    // Dark mode
    body.style.setProperty("--background-color", "#111");
    body.style.setProperty("--text-color", "#fff");
  } else {
    // Light mode
    body.style.setProperty("--background-color", "#fffff0");
    body.style.setProperty("--text-color", "#111");
  }
});

// Starting Values
billAmount.value = 0;
tipInput.value = 15;
guestsInput.value = 1;

function calculateTipTotal() {
  // Get the values from input fields
  const bill = parseFloat(billAmount.value);
  const tipPercentage = parseFloat(tipInput.value);
  // Calculate Tip and Total
  const tipAmount = bill * tipPercentage / 100;
  const totalBill = bill + tipAmount;
  //Update Display
  tipDisplay.textContent = tipAmount.toFixed(2);
  totalDisplay.textContent = totalBill.toFixed(2);
}

billAmount.addEventListener("input", calculateTipTotal);
tipInput.addEventListener("input", calculateTipTotal);

calculateTipTotal();
