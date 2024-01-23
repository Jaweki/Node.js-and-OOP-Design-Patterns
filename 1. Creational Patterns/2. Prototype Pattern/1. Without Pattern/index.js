const Shopper = require('./Shopper');

const jack = new Shopper('Jack Weru');
jack.addItemToList('camping knife');
jack.addItemToList('tent');
jack.addItemToList('backpack');
jack.addItemToList('map');
jack.addItemToList('slignshot');

const eve = new Shopper('Eve Rachell');
eve.addItemToList('camping knife');
eve.addItemToList('tent');
eve.addItemToList('backpack');
eve.addItemToList('map');
eve.addItemToList('reading light');

console.log(`${jack.name}: ${jack.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);