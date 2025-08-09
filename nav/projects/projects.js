import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/index.html");


const projects = [
    {
        name: "󰌌 Project zero",
        desc: "An AI travel planner",
        sc: "q",
        dest: "project.html?name=Project%20Zero",
    },
    {
        name: "󰌌 Project One",
        desc: "In this project I collaborated with a company to make an app",
        sc: "w",
        dest: "a",
    },
    {
        name: "󰌌 Project Two",
        desc: "In this project I contributed to an open source github repo",
        sc: "e",
        dest: "b",
    },
];


// Select the project container
const projectContainer = document.querySelector(".cjs-project-container");

// Create all project buttons
projects.forEach(({name, desc, sc, dest, data}) => {
    utils.createButton(projectContainer, name, desc, sc, dest, data);
});

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();
