const logger = require("./Logger");
const Shopper = require("./Shopper");
const Store = require("./Store");

logger.log('starting app...');

const shopper = new Shopper('Jack', 500);
const ski_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
]);

logger.log('finished config... \n\n');

console.log(`${logger.count} logs total`);
logger.logs.forEach(log => console.log(`${log.message}`));