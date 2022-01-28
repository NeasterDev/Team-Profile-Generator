const Employee = require('../lib/Employee');

test("it should create an employee object with default vaclues", () => {
    const testEmployee = new Employee();

    expect(testEmployee.name).toEqual(expect.any(String));
    expect(testEmployee.id).toEqual(expect.any(Number));
    expect(testEmployee.email).toEqual(expect.stringContaining("@"));
});

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

test("it should return with the role type i.e Employee", () => {
    const testEmployee = new Employee();

    expect(testEmployee.getRole()).toEqual("Employee");
});


