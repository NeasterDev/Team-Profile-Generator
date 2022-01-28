const Intern = require('../lib/Intern');

test("it should create an Intern object who's name is Rick", () => {
    const testEmployee = new Intern("Rick");

    expect(testEmployee.name).toEqual('Rick');
});

test("it should create an Intern object who's ID is 5", () => {
    const testEmployee = new Intern("Rick", 5);

    expect(testEmployee.id).toEqual(5);
});

test("it should create an Intern object who's email contains the @ symbol", () => {
    const testEmployee = new Intern("Rick", 5, 'rick@employee.com');

    expect(testEmployee.email).toEqual(expect.stringContaining("@"));
});