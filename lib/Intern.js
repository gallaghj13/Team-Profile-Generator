const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: 'What school does the Intern attend?',
            }
        ])
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;