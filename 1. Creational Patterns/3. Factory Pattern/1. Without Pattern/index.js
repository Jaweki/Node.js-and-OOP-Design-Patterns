const Shopper = require('./Shopper');
const Employee = require('./Employee');

const jack = new Shopper('Jack Weru', 100);
const eve = new Employee('Eve Rachell', 100, 'This and That');

console.log(jack.toString());
console.log(eve.toString());