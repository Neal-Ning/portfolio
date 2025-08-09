import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/index.html");

// Example projects, will be replaced by own projects from data base
const projects = [
    {
        name: "󰕒 BudgetBuddy", // calculator icon
        desc: "A personal finance tracker",
        sc: "q",
        dest: "project.html?name=BudgetBuddy",
    },
    {
        name: "󰖔 SkyCast", // cloud icon
        desc: "A weather forecast web app",
        sc: "w",
        dest: "project.html?name=SkyCast",
    },
    {
        name: "󰈤 QuizArena", // game controller icon
        desc: "A multiplayer quiz game",
        sc: "e",
        dest: "project.html?name=QuizArena",
    },
    {
        name: "󰆍 RecipeGenie", // magic wand icon
        desc: "An AI-powered recipe generator",
        sc: "r",
        dest: "project.html?name=RecipeGenie",
    },
    {
        name: "󰄉 HabitHero", // checkmark icon
        desc: "A daily habit tracker",
        sc: "t",
        dest: "project.html?name=HabitHero",
    },
    {
        name: "󰈙 NoteLite", // notebook icon
        desc: "A lightweight note-taking app",
        sc: "y",
        dest: "project.html?name=NoteLite",
    },
    {
        name: "󰖆 FitPlanner", // dumbbell icon
        desc: "A workout routine planner",
        sc: "u",
        dest: "project.html?name=FitPlanner",
    },
    {
        name: "󰔳 StockWatch", // chart icon
        desc: "A stock market tracking tool",
        sc: "i",
        dest: "project.html?name=StockWatch",
    },
    {
        name: "󰎈 MelodyMix", // music note icon
        desc: "A music playlist generator",
        sc: "o",
        dest: "project.html?name=MelodyMix",
    },
    {
        name: "󰄛 CalmClock", // clock icon
        desc: "A mindfulness meditation timer",
        sc: "p",
        dest: "project.html?name=CalmClock",
    },
];


// Select the project container
const projectContainer = document.querySelector(".flex-grow-container");

// Create all project buttons
projects.forEach(({name, desc, sc, dest, data}) => {
    utils.createButton(projectContainer, name, desc, sc, dest, data);
});

// Add keydown / keyup listeners for buttons
utils.addButtonKeyListeners();
