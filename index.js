import * as utils from "/utils.js";

// List of menu items
const menu = [
    {
        text: " About Me",
        sc: "a",
        dest: "/nav/aboutme/aboutme.html"
    },
    {
        text: "󰛨 Projects",
        sc: "p",
        dest: "/nav/projects/projects.html"
    },
    {
        text: "󰋄 Music",
        sc: "m",
        dest: "/nav/music/music.html"
    },
]

// Select the button container
const buttons = document.querySelector(".db-buttons");

// Create all menu buttons
menu.forEach(({text, sc, dest}) => {
    utils.createButton(buttons, text, sc, dest);
});

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();
