class Storage {

    constructor(name, inventory=[], deliveryTime=0) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;
        this.next = null;
    }

    lookInLocalInventory(itemName) {
        return this.inventory.filter( item => item.name === itemName)[0];
    }

    setNext(storage) {
        this.next = storage;
    }

    find(itemName) {
        const found = this.lookInLocalInventory(itemName);

        if (found) {
            return {
                ...found,
                location: this.name,
                deliveryTime: (this.deliveryTime === 0) ? 'now' : `${this.deliveryTime} day(s)`
            }
        } else if (this.next) {
            return this.next.find(itemName);
        } else {
            return `Store does not carry ${itemName}`
        }
    }
}

module.exports = Storage;