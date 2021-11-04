const Engineer = require("../lib/Engineer");

describe("getGithub()", () => {
    it("should store the engineers github", () => {
        const employee = new Engineer("John", 1, "g@gmail.com", "gallaghj13");
        expect(employee.getGithub()).toBe("gallaghj13");
    })
});
describe("getRole()", () => {
    it("should store the engineers role", () => {
        const employee = new Engineer("John", 1, "g@gmail.com", "gallaghj13", "Engineer");
        expect(employee.getRole()).toBe("Engineer");
    })
});