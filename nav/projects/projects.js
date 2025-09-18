import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/index.html");

// Select the project container
const projectContainer = document.querySelector(".flex-grow-container");


// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();

// Fetch and load a list of projects
(async () => {
    try {
        const projects = await utils.loadProjectList();
        for (const {name, desc, sc, dest, data} of projects) {
            utils.createButton(projectContainer, name, desc, sc, dest, data);
        }
    } catch (err) {
        console.log(`Error: ${err}`);
    }
})();
