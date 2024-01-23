const Person = require('./Person');

class Employee extends Person {

    constructor(name, money=0, employer='') {
        super(name);
        this.employer = employer;
        this.employed = true;
    }

    payDay(money=0) {
        this.money += money;
    }
}

module.exports = Employee;