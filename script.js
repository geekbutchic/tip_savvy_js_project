"use strict";
/* JS for Light & Dark Toggle  */
const toggleSwitch = document.getElementById("toggle");
const body = document.body;

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    // Dark mode
    body.style.setProperty("--background-color", "#111");
    body.style.setProperty("--text-color", "#fff");
  } else {
    // Light mode
    body.style.setProperty("--background-color", "#fff");
    body.style.setProperty("--text-color", "#111");
  }
});
