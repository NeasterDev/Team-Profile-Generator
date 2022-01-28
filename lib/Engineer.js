const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() { return this.github;  }
    getRole()   { return this.constructor.name;  }
}

const eng = new Engineer("github");
console.log(eng.getHub());
console.log(eng.getName());

module.exports = Engineer;