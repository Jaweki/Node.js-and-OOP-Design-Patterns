const CatalogItem = require('./CatalogItem');
const CatalogGroup = require("./CatalogGroup");


const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("Califonia wook boots", 19.99);

const group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);
const group_food = new CatalogGroup("Food for while you try on Clothes", [
    new CatalogItem("Milkshake", 5.99),
    new CatalogItem("French fries", 3.99)
]);

const keychain = new CatalogItem("Key Chain", .99);

const catalog = new CatalogGroup("Clothes and Food", [keychain, group_shoes, group_food]);

console.log(`$${catalog.total}`);
catalog.print();

// What you'll notice is that the catalog group has composite items.
// the composite list printed by catalog.print() log to console both groups and individual items
// Thus, composite programming pattern allows,
// to treat branches of data and leaf data in a tree structure, in an equal manner.
// Example, in the composite programming of this file, all catalog groups and catalog items,
// were printed to the console. catalog groups are denoted with capital letter statements.