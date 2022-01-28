class Employee {
    constructor(name = "Employee", id = 0, email = "testemail@test.com") {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName()  { return this.name;  }
    getId()    { return this.id;    }
    getEmail() { return this.email; }
    getRole()  { return this.constructor.name } // returns Employee

}

module.exports = Employee;