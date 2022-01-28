const Manager = require('../lib/Manager');

test("it should create an Manager object who's name is Rick", () => {
    const testEmployee = new Manager("Rick");

    expect(testEmployee.name).toEqual('Rick');
});

test("it should create an Manager object who's ID is 5", () => {
    const testEmployee = new Manager("Rick", 5);

    expect(testEmployee.id).toEqual(5);
});

test("it should create an Manager object who's email contains the @ symbol", () => {
    const testEmployee = new Manager("Rick", 5, 'rick@employee.com');

    expect(testEmployee.email).toEqual(expect.stringContaining("@"));
});

test('it should create a manager with an office number', () => {
    const testEmployee = new Manager("rick",6, 'manager@man.com', 15);

    expect(testEmployee.officeNumber).toEqual(15);
})