class Employee {
    constructor(name = "Employee", id = 0, email = "testemail@test.com") {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;