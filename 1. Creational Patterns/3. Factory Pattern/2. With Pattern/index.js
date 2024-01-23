const userFactory = require('./userFactory');

const jack = userFactory('Jack Weru', 100);
const eve = userFactory('Eve Rachell', 100, 'employee', 'This and That');

eve.payDay = 500
console.log(jack.toString());
console.log(eve.toString());