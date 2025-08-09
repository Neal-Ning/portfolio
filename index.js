import * as utils from "/utils.js";

// List of menu items
const menu = [
    {
        name: " About Me",
        sc: "a",
        dest: "/nav/aboutme/aboutme.html"
    },
    {
        name: "󰛨 Projects",
        sc: "p",
        dest: "/nav/projects/projects.html"
    },
    {
        name: "󰋄 Music",
        sc: "m",
        dest: "/nav/music/music.html"
    },
]

// Select the button container
const buttons = document.querySelector(".db-buttons");

// Create all menu buttons
menu.forEach(({name, sc, dest}) => {
    utils.createButton(buttons, name, "", sc, dest);
});

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();
