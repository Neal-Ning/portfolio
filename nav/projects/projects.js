import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/index.html");


const projects = [
    {
        text: "󰌌 Project zero",
        sc: "q",
        dest: "",
    },
    {
        text: "󰌌 Project One - In this project I collaborated with a company to make an app",
        sc: "w",
        dest: "",
    },
    {
        text: "󰌌 Project Two - In this project I contributed to an open source github repo",
        sc: "e",
        dest: "",
    },
    {
        text: "󰌌 Project One - In this project I collaborated with a company to make an app",
        sc: "w",
        dest: "",
    },
    {
        text: "󰌌 Project Two - In this project I contributed to an open source github repo",
        sc: "e",
        dest: "",
    },
    {
        text: "󰌌 Project One - In this project I collaborated with a company to make an app",
        sc: "w",
        dest: "",
    },
    {
        text: "󰌌 Project Two - In this project I contributed to an open source github repo",
        sc: "e",
        dest: "",
    },
    {
        text: "󰌌 Project One - In this project I collaborated with a company to make an app",
        sc: "w",
        dest: "",
    },
    {
        text: "󰌌 Project Two - In this project I contributed to an open source github repo",
        sc: "e",
        dest: "",
    },
    {
        text: "󰌌 Project One - In this project I collaborated with a company to make an app",
        sc: "w",
        dest: "",
    },
    {
        text: "󰌌 Project Two - In this project I contributed to an open source github repo",
        sc: "e",
        dest: "",
    }
];


// Select the project container
const projectContainer = document.querySelector(".cjs-project-container");

// Create all project buttons
projects.forEach(({text, sc, dest}) => {
    utils.createButton(projectContainer, text, sc, dest);
});

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();
