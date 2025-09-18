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
        // const projectData = await utils.loadData("projectDataMd.md")
        // const singleProjectData = projectData.find(data => data.name === projectName);
        // const singleProjectData = await fetch(`../../data/${projectName}.md`).then(r => r.text());
        const singleProjectData = await utils.loadMarkdown(projectName);
        utils.displayData(container, singleProjectData, projectName);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
})();
