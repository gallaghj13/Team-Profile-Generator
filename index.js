const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
        .then( (data) => {
            console.log(data);
            writeToFile(data);
        })
}

// Function call to initalize app
init();