const scout_prototype = require('./scout');

const jack = scout_prototype.clone();
jack.name = 'Jack Weru'
jack.addItemToList('slignshot');

const eve = scout_prototype.clone();
eve.name = 'Eve Rachell';
eve.addItemToList('reading light');

console.log(`${jack.name}: ${jack.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);