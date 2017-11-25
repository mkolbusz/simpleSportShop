export class Product {
    $key: string;

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public qty: number,
        public price: number,
        public image: string,
        public category: string
    ) {
    }

    isAvailable(): Boolean {
        return this.qty > 0;
    }

    getImageUrl() {
        return '/assets/images/products/' + this.image;
    }

    public getId(): number {
        return this.id;
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.description;
    }

    getName(): string {
        return this.name;
    }
}
