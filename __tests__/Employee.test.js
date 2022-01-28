const Employee = require('../lib/Employee');

test("it should create an employee object who's name is Rick", () => {
    const testEmployee = new Employee("Rick");

    expect(testEmployee.name).toEqual('Rick');
});

test("it should create an employee object who's ID is 5", () => {
    const testEmployee = new Employee("Rick", 5);

    expect(testEmployee.id).toEqual(5);
});

test("it should create an employee object who's email contains the @ symbol", () => {
    const testEmployee = new Employee("Rick", 5, 'rick@employee.com');

    expect(testEmployee.email).toEqual(expect.stringContaining("@"));
});


