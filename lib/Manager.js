const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
      return this.officeNumber;
  }

  getRole() {
      return "Manager"
  }

//   getOfficeNumber() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is the Manager's office number?",
//       },
//     ]);
//   }
//   getRole() {
//     return "Manager";
//   }
}

module.exports = Manager;
