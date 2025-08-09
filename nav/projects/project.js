import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/nav/projects/projects.html");

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();

// Name of project specified in the url params
const projectName = new URLSearchParams(window.location.search).get("name");
document.querySelector("title").innerText = projectName;

// Fetch and load data corresponding to the requested project
const container = document.querySelector(".flex-grow-container");
(async () => {
    try {
        const projectData = await utils.loadData("projectData.json")
        const singleProjectData = projectData.find(data => data.name === projectName);
        utils.displayData(container, singleProjectData);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
})();
