import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/index.html");

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();

// Fetch and load about me page data (texts and links)
const container = document.querySelector(".flex-grow-container");
(async () => {
    try {
        const aboutmeInfo = await utils.loadData("aboutmeInfo.json")
        utils.displayData(container, aboutmeInfo);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
})();
