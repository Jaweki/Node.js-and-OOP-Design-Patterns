const Storage = require('./Storage');

class Store {

    constructor(name, inventory={}) {
        this.name = name;
        
        const invFields = Object.keys(inventory);

        const storageLocations = invFields.map( location => (
            new Storage(`store ${location}`, inventory[location], 
                location == "localStore" ? 1 : 
                location == 'warehouse' ? 5 : 0
            ))
        )
        this.storage = storageLocations[0];

        storageLocations.forEach( (storeLocation, index) => (
            storeLocation.setNext(storageLocations[index + 1])
        ))
    }

    find(itemName) {
        return this.storage.find(itemName);
    }
}

module.exports = Store;