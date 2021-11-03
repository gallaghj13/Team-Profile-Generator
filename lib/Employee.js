
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
}

module.exports = Employee;
