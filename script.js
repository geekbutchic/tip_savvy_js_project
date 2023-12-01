"use strict";
/* JS for Light & Dark Toggle */
const toggleSwitch = document.getElementById("toggle");
const body = document.body;

const tipDisplay = document.querySelector(".tip-section span");
const totalDisplay = document.querySelector(".total-section span");

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

tipDisplay.textContent = 1;
totalDisplay.textContent = 1;
