const Shopper = require('./Shopper');
const Employee = require('./Employee');


const userFactory = (name, type, employer, money=0) => {
    if (type === 'employee') {
        return new Employee(name, money, employer)
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userFactory;