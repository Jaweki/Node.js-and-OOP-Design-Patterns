class CatalogItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get total() {
        return this.price;
    }

    print() {
        console.log(`${this.name} has price: $${this.price}`);
    }
}

module.exports = CatalogItem;