const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

   async getName() {
       return this.name
   }

   async getId() {
       return this.id
   }

   async getEmail() {
       return this.email;
   }

   async getRole() {
       return "Employee"
   }
//   getName() {
//     inquirer
//         .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is the name of the employee?",
//       },
//     ])
//     .then((val) => {
//         this.name = val.name;
//         console.log(this.name);
//         this.getId();
//     })
//   }

//   getId() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "id",
//         message: "What is the employee's id number?",
//       },
//     ]) 
//     .then((val) => {
//         this.id = val.id;
//         console.log(this.id);
//         this.getEmail();
//     });
//   }

//   getEmail() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "email",
//         message: "What is the employee's email address?",
//       },
//     ])
//     .then((val) => {
//         this.email = val.email;
//         console.log(this.email);
//         this.getRole();
//     });
//   }
  
//   getRole() {
//       this.role = "Employee";
//   }
}
module.exports = Employee;
