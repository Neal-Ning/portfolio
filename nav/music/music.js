import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/index.html");

const container = document.querySelector(".cjs-music-container");
container.innerHTML = `
    <div style="
        font-size: 50px; 
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding-top: 50px;
    ">Coming Soon</div>
`;

utils.addButtonKeyListeners();
