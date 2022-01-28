const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { 
        super(name, id, email);
        this.officeNumber = officeNumber; 
    }

    getRole() {return this.constructor.name } // returns Manager
}

const man = new Manager("phil",1,"email@am.com",5);
console.log(man);
console.log(man.getRole());
console.log(man.id);

module.exports = Manager;