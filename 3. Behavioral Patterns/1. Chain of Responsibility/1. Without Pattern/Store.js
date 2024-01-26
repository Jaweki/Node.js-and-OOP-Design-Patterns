class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        this.inventory = inventory;
    }

    find(itemName) {
        return this.inventory.filter( item => item.name === itemName )[0];
    }
}

module.exports = Store;