const Employee = require("../lib/Employee.js");

describe("getName()", () => {
  it("should store the employee name", () => {
    const employee = new Employee("John", 1, "g@gmail.com", "Employee");
    expect(employee.getName()).toBe("John");
  });
});
describe("getId()", () => {
  it("should store the employee id", () => {
    const employee = new Employee("John", 1, "g@gmail.com", "Employee");
    expect(employee.getId()).toBe(1);
  });
});
describe("getEmail()", () => {
  it("should store the employee email", () => {
    const employee = new Employee("John", 1, "g@gmail.com", "Employee");
    expect(employee.getEmail()).toBe("g@gmail.com");
  });
});
describe("getRole()", () => {
  it("should store the employee role", () => {
    const employee = new Employee("John", 1, "g@gmail.com", "Employee");
    expect(employee.getRole()).toBe("Employee");
  });
});
