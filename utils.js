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

// Create a button that leads back to a specified page
export function createBackButton(buttons, dest) {
    createButton(buttons, "󰌍 Back", "", "b", dest);
}

// Listens for pressing of the short cut keys of each menu item
// Also listens for scrolling with j and k
export function addButtonKeyListeners() {
    let scrollInterval = null;
    document.body.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();

        // If scroll keys held, scroll every 16 millisecond
        if (key === "j" || key === "k") {
            const scrollable = document.querySelector(".scrollable");
            if (scrollable) {
                event.preventDefault();
                const step = key === "j" ? 10 : -10;
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        scrollable.scrollTop += step;
                    }, 16);
                }
            }
        }

        // Add key press select animation
        const btn = document.querySelector(`.button[data-sc="${key}"]`);
        if (btn) btn.classList.add("button-select");
    });
    document.body.addEventListener("keyup", (event) => {
        const key = event.key.toLowerCase();

        // If scroll keys released, stop the interval timer
        if (key === "j" || key === "k") {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }

        // Add key release select animation
        const btn = document.querySelector(`.button[data-sc="${key}"]`);
        if (btn) {
            btn.classList.remove("button-select");
            // Navigate to the page corresponding to the selected button
            window.location.href = btn.dataset.dest; 
        }
    });
}

// Load json data from the data folder
export async function loadData(name) {
    const response = await fetch(`/data/${name}`);
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    return await response.json();
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
