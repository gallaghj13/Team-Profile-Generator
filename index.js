const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');


// TODO: Create a function to initialize app
function getManager() {
return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
    }
])
.then(maangerData => {
    const {name, id, email, officeNumber} = maangerData
    employee = new Manager(name, id, email, officeNumber)
    let role = {role: "Manager"}
    return {...maangerData, ...role}
})
}

function newEngineer() {
    let newEngineer = new Engineer();
    if(newEngineer === { }) {
        newEngineer.getName();
    } else {
        addEmployee();
    }
}

function newIntern() {
    let newIntern = new Intern();
    if(newIntern === {}) {
        newIntern.getName();
    } else {
        addEmployee();
    }  
}

function addEmployee() {
    // Two if statements for managerData.engineersArr and managerData.internsArr
    inquirer    
        .prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Would you like to add another employee?',
                choices: ['Engineer', 'Intern', 'Done Building Team']
            }
        ])
        .then((val) => {
            if(val.choices === "Engineer") {
                newEngineer();
                // After questions emplyee = new Engineer(employeeData.name and so on...) and pass in questions data
                // Set role = to Engineer
                // managerData.engineers.push({...employeeData,...role})
                // return addEmployee till user has selected completed
            }
            if(val.choices === "Intern") {
                newIntern();
            }
            // } else {
            //     // call function to generate html
            // }
            
        })
}

// Need function to generate html

// Function call to initalize app
getManager();

// After Manager is answered Prompt Intern/Engineer questions
// After Completed is selected Prompt write file 
// After Write File prompt copy file for css
// Add a catch function
