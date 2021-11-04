const Intern = require("../lib/Intern.js");

describe("getSchool()", () => {
    it("should store the intern's school", () => {
        const employee = new Intern("John", 1, "g@gmail.com", "DU");
        expect(employee.getSchool()).toBe("DU");
    })
});
describe("getRole()", () => {
    it("should store the intern's role", () => {
        const employee = new Intern("John", 1, "g@gmail.com", "DU", "Intern");
        expect(employee.getRole()).toBe("Intern");
    })
});