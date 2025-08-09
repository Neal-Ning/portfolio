import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer);

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();
