// Create an interative button given its container and data
export function createButton(buttons, name, desc, sc, dest, data) {
    // Create div to contain text, shortcut key text, and some data
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("button");
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
        const btn = document.querySelector(`.button[data-sc="${event.key.toLowerCase()}"]`);
        if (btn) btn.classList.add("button-select");
    });
    document.body.addEventListener("keyup", (event) => {
        const btn = document.querySelector(`.button[data-sc="${event.key.toLowerCase()}"]`);
        if (btn) {
            btn.classList.remove("button-select");
            window.location.href = btn.dataset.dest; 
        }
    });
}

// Display the data in structure: Name, text, exp, links
export function displayData(container, data) {
    // Find container and make divider
    const {name, text, exp, links} = data;
    const divider = document.createElement("div");
    divider.classList.add('divider-dashed');

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
    linksEle.classList.add("flex-container");
    links.forEach(link => {
        createButton(linksEle, link.text, "", link.sc, link.href, "");
    });
    container.appendChild(linksEle);
}
