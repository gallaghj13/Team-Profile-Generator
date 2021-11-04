const Manager = require("../lib/Manager.js");

describe("getOfficeNumber()", () => {
    it("should store the manager's office number", () => {
        const employee = new Manager("John", 1, "g@gmail.com", 1);
        expect(employee.getOfficeNumber()).toBe(1);
    })
});
describe("getRole()", () => {
    it("should store the manager's role", () => {
        const employee = new Manager("John", 1, "g@gmail.com", 1, "Manager");
        expect(employee.getRole()).toBe("Manager");
    })
});