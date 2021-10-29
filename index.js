const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');

const teamArray = [];


// TODO: Create a function to initialize app
function getManager() {
    newmanager = new Manager();
    newmanager.getName();
}

// Function call to initalize app
getManager();
