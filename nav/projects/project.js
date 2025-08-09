import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/nav/projects/projects.html");

const projectData = [
    {
        name: "Project Zero",
        text: [
            "In this project I collaborated with a company to make an app that helps people make travel plans ahead of time. The app is availble on all platforms and uses ai agents to gather requirements from the user and contruct a travel plan. The users can select parts and add requirements to have the ai adjust the selected parts of the plan...",
            "The client was satisfied with my work. I have learned much from this experience. The list of skills involved is listed below. ",
            "This is a template and does not correspond to work",
        ],
        exp: [
            "󰚩 AI agents",
            " Electron",
            " Node JS",
            " HTML",
            " SQL",
            "󰀴 Android studio",
            " Team work",
        ],
        links: [
            {
                href: "https://github.com/",
                text: "Github: user/repo.git",
                sc: "g",
            }, 
            {
                href: "https://google.com/",
                text: "Company: Google",
                sc: "o",
            },
        ],
    },
    {
        name: "Project Two",
        text: "asd;lfjsl;akdjfkl;sdajflk;djalk",
    },
    {
        name: "Project Three",
        text: "fd;lsajfldk;sajfkl;dsjakl;fjsdklj",
    }
]


// Query and find the data of project specified in the url params
function getSingleProjectData() {
    const params = new URLSearchParams(window.location.search);
    const projectName = params.get("name");
    return projectData.find(data => data.name === projectName);
}

const data = getSingleProjectData();
const container = document.querySelector(".cjs-project-display-container");
utils.displayData(container, data);

utils.addButtonKeyListeners();
