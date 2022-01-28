const Engineer = require('../lib/Engineer');

test("it should create an Engineer object who's name is Rick", () => {
    const testEmployee = new Engineer("Rick");

    expect(testEmployee.name).toEqual('Rick');
});

test("it should create an Engineer object who's ID is 5", () => {
    const testEmployee = new Engineer("Rick", 5);

    expect(testEmployee.id).toEqual(5);
});

test("it should create an Engineer object who's email contains the @ symbol", () => {
    const testEmployee = new Engineer("Rick", 5, 'rick@employee.com');

    expect(testEmployee.email).toEqual(expect.stringContaining("@"));
});

test("it should return with the role type i.e Engineer", () => {
    const testEmployee = new Engineer();

    expect(testEmployee.getRole()).toEqual("Engineer");
});