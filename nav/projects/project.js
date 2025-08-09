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

function displayProjectData() {
    // Find container and make divider
    const container = document.querySelector(".cjs-project-display-container");
    const {name, text, exp, links} = getSingleProjectData();
    const divider = document.createElement("div");
    divider.classList.add('db-divider-dotted');

    // Create a project name title
    const nameEle = document.createElement("p");
    nameEle.innerText = name;
    nameEle.style = "font-size: 30px; font-weight: bold";
    container.appendChild(nameEle);
    container.appendChild(divider.cloneNode());

    // Create div for detailed project description
    const textEle = document.createElement("div");
    text.forEach(paragraph => {
        const paragraphEle = document.createElement("p");
        paragraphEle.innerText = paragraph;
        textEle.appendChild(paragraphEle);
    });
    container.appendChild(textEle);
    container.appendChild(divider.cloneNode());

    // Create div for skills and experiences
    const expEle = document.createElement("div");
    exp.forEach(point => {
        const eEle = document.createElement("p");
        eEle.innerText = point;
        expEle.appendChild(eEle);
    });
    container.appendChild(expEle);
    container.appendChild(divider.cloneNode());
    
    // Create div for project links
    const linksEle = document.createElement("div");
    linksEle.classList.add("db-buttons");
    links.forEach(link => {
        utils.createButton(linksEle, link.text, "", link.sc, link.href, "");
    });
    container.appendChild(linksEle);
}
displayProjectData();

utils.addButtonKeyListeners();
