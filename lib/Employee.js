class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const rick = new Employee('rick','1', 'rick@gmail.com');

console.log(rick);

module.exports = Employee;