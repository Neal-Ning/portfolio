import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/index.html");

const aboutmeInfo = {
    name: "About me",
    text: [
        "blah blah blah",
        "blah blah blah",
    ],
    exp: [
        "blah blah blah",
        "blah blah blah",
    ],
    links: [
        {
            href: "https://github.com/",
            text: " Github: User",
            sc: "g",
        }, 
        {
            href: "https://gmail.com/",
            text: "󰇮 Email: Someone@gmail.com",
            sc: "m",
        },
        {
            href: "https://linkedin.com/",
            text: " LinkedIn: Name, name",
            sc: "l",
        },
    ]
}

const container = document.querySelector(".flex-grow-container");
utils.displayData(container, aboutmeInfo);

utils.addButtonKeyListeners();
