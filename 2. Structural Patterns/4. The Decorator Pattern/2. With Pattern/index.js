const Shopper = require('./Shopper')
const { 
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
} = require('./InventoryItem');

const jack = new Shopper('Jack', 100);
const tom = new Shopper('Tom', 10000);


const walkman = new InventoryItem("Walkman", 29.99);
const neclace = new InventoryItem("Neclace", 9.99);

const gold_neclace = new GoldenInventoryItem(neclace);
const diamond_gold_neclace = new DiamondInventoryItem(gold_neclace);

const diamond_walkman = new DiamondInventoryItem(walkman);

jack.purchase(neclace);
jack.purchase(walkman);

tom.purchase(diamond_gold_neclace);
tom.purchase(diamond_walkman)


jack.printStatus();
tom.printStatus();
diamond_gold_neclace.print() // with this method call, notice that super class methods,
                            // can still be applied to decorated objects. similar to when inherited.

/* Decoratos adhere better to the Open/ClosedPrincipl, which states that 
   a class should be open for extension but closed for modification. You can add new 
   decorators without modifying existing code.
 */
