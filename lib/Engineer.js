const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }
    getGithub() {
        inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is the employee's github username?",
            }
        ])
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;