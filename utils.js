// Create an interative button given its container and data
export function createButton(buttons, name, desc, sc, dest, data) {
    // Create div to contain text, shortcut key text, and some data
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("db-button");
    menuItemDiv.dataset.sc = sc;
        menuItemDiv.dataset.dest = dest;
    if (data) {
        menuItemDiv.dataset.data = JSON.stringify(data); 
    }
    menuItemDiv.innerHTML = `<span>${name}${desc && (" - " + desc)}</span><span>${sc}</span>`;

    // Clicking redirects to page whose path is stored in ${dest}
    menuItemDiv.addEventListener("click", () => {
        window.location.href = dest;
    });

    // Render the buttons
    buttons.appendChild(menuItemDiv);

    return menuItemDiv;
}

// Create a button that leads back to index page
export function createBackButton(buttons, dest) {
    createButton(buttons, "󰌍 Back", "", "b", dest);
}

// Listens for pressing of the short cut keys of each menu item
export function addButtonKeyListeners() {
    document.body.addEventListener("keydown", (event) => {
        const scrollable = document.querySelector(".scrollable");
        const step = 40;
        if (scrollable) {
            event.preventDefault();
            if (event.key.toLowerCase() === "j") {
                scrollable.scrollTop += step;
            } else if (event.key.toLowerCase() === "k") {
                scrollable.scrollTop -= step;
            }
        }
        const btn = document.querySelector(`.db-button[data-sc="${event.key.toLowerCase()}"]`);
        if (btn) {event.preventDefault(); btn.classList.add("db-button-select");}
    });
    document.body.addEventListener("keyup", (event) => {
        const btn = document.querySelector(`.db-button[data-sc="${event.key.toLowerCase()}"]`);
        if (btn) {
            event.preventDefault();
            btn.classList.remove("db-button-select");
            if (btn.dataset.dest) {
                window.location.href = btn.dataset.dest; 
            } else if (btn.dataset.data) {
                loadButtonData(JSON.parse(btn.dataset.data));
            }
        }
    });
}

function loadButtonData(data) {
    console.log(data);
}
