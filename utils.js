// Import markdown to html converter, and XSS purifier
import { marked } from "https://cdn.jsdelivr.net/npm/marked@12/lib/marked.esm.js";
import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify@3/dist/purify.es.mjs";

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

// Load markdown project data from the data folder
export async function loadMarkdown(name) {
    const response = await fetch(`/data/${name}.md`);
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    return await response.text();
}

// Load json project data from the data folder
export async function loadJson(name) {
    const response = await fetch(`/data/${name}.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    return await response.json();
}

// Display the markdown data
export async function displayData(container, data, name) {
    // Convert markdown data to html and sanitize
    const html = marked.parse(data);
    container.innerHTML = DOMPurify.sanitize(html);

    // Load all project links
    const projectLinks = await loadJson("projectLinks");
    const links = projectLinks.find(block => block[name])[name];

    // If project has links, make them clickable buttons
    if (links) {
        // Create div for project links
        const linksEle = document.createElement("div");
        linksEle.classList.add("flex-container");
        links.forEach(link => {
            createButton(linksEle, link.text, "", link.sc, link.href, "");
        });
        container.appendChild(linksEle);
    }
}
