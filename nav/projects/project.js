import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/nav/projects/projects.html");

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();

// Query and find the data of project specified in the url params
function getSingleProjectData(projectData) {
    const params = new URLSearchParams(window.location.search);
    const projectName = params.get("name");
    return projectData.find(data => data.name === projectName);
}

// Fetch and load data corresponding to the requested project
const container = document.querySelector(".flex-grow-container");
(async () => {
    try {
        const projectData = await utils.loadData("projectData.json")
        const singleProjectData = getSingleProjectData(projectData);
        utils.displayData(container, singleProjectData);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
})();
