const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const generateHTML = require("./src/page-template");


// TODO: Create a function to initialize app
const ManagerPrompt = () => {
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
.then(managerData => {
    const {name, id, email, officeNumber} = managerData;
    employee = new Manager(name, id, email, officeNumber);
    let role = {role: "Manager"};
    return {...managerData, ...role};
})
}

const addEmployee = managerData => {
    // Two if statements for managerData.engineersArr and managerData.internsArr
    if(!managerData.engineersArr) {
        managerData.engineersArr = [];
    }
    if(!managerData.internsArr) {
        managerData.internsArr = [];
    }
    return inquirer    
        .prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Would you like to add another employee?',
                choices: ['Engineer', 'Intern', 'Done Building Team']
            }
        ])
        .then(({ employee }) => {
            if(employee === "Engineer") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the engineer's name?",
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the engineer's id?",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the engineer's email?",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's github username?",
                    }
                ]) .then(engineerData => {
                    engineerData = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                    let role = {role: "Engineer"};
                    managerData.engineersArr.push({...engineerData,...role});
                    return addEmployee(managerData);
                })
                // After questions emplyee = new Engineer(employeeData.name and so on...) and pass in questions data
                // Set role = to Engineer
                // managerData.engineers.push({...employeeData,...role})
                // return addEmployee till user has selected completed
            } else if( employee === "Intern") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the intern's name?",
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the intern's id?",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the intern's email?",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What school does the intern attend?",
                    }
                ]) .then(internData => {
                    internData = new Intern(internData.name, internData.id, internData.email, internData.school);
                    let role = {role: "Intern"};
                    managerData.internsArr.push({...internData,...role});
                    return addEmployee(managerData);
                })
            } else {
                return managerData;
            }
            
        })
}

// Need function to write html
const writeHtml = (templateData) => {
    const htmlContent = templateData;
    fs.writeFile('SAMPLEHTML.html', htmlContent, (err) =>
    err ? console.log(err) : console.log("Success!")
    );
    fs.copyFile("./src/src.css", "./dist/style.css", (err) => {
        err ? console.log(err) : console.log("Success!")
    });
    return;
}
// Function call to initalize app
ManagerPrompt()
    .then(addEmployee)
    .then(managerData => {
        return generateHTML(managerData);
    })
    .then(templateData => {
        return writeHtml(templateData);
    })
    .catch(err => {
        console.log(err);
    });
    // .then(writeHtmlResponse => {
    //     console.log("Success!")
    //     return
    // });

// After Manager is answered Prompt Intern/Engineer questions
// After Completed is selected Prompt write file 
// After Write File prompt copy file for css
// Add a catch function
