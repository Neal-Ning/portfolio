// List of menu items
const menu = [
    {
        text: " About Me",
        sc: "a",
        dest: "./nav/aboutme/aboutme.html"
    },
    {
        text: "󰛨 Projects",
        sc: "p",
        dest: "./nav/projects/projects.html"
    },
    {
        text: "󰋄 Music",
        sc: "m",
        dest: "./nav/music/music.html"
    },
]

// Select the button container
const buttons = document.querySelector(".db-buttons");

menu.forEach(({text, sc, dest}) => {
    // Create div to contain text, shortcut key text, and some data
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("db-button");
    menuItemDiv.dataset.sc = sc;
    menuItemDiv.dataset.dest = dest;
    menuItemDiv.innerHTML = `<span>${text}</span><span>${sc}</span>`;

    // Clicking redirects to page whose path is stored in ${dest}
    menuItemDiv.addEventListener("click", () => {
        window.location.href = dest;
    });

    // Render the buttons
    buttons.appendChild(menuItemDiv);
});

// Listens for pressing of the short cut keys of each menu item
document.body.addEventListener("keydown", (event) => {
    const btn = document.querySelector(`.db-button[data-sc="${event.key.toLowerCase()}"]`);
    if (btn) btn.classList.add("db-button-select");
});
document.body.addEventListener("keyup", (event) => {
    const btn = document.querySelector(`.db-button[data-sc="${event.key.toLowerCase()}"]`);
    if (btn) {
        btn.classList.remove("db-button-select");
        window.location.href = btn.dataset.dest; 
    }
});
