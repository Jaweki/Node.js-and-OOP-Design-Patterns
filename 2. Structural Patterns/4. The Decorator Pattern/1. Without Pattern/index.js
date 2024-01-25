const Shopper = require('./Shopper')
const InventoryItem = require('./InventoryItem');

const jack = new Shopper('Jack', 100);

const walkman = new InventoryItem("Walkman", 29.99);
const neclace = new InventoryItem("Neclace", 9.99);

jack.purchase(neclace);
jack.purchase(walkman);

jack.printStatus();

// Now how about if we wanted an inventory item that was much precious, like golden or diamond
// In the next tutorial file, we make decorator methods to make this happen.