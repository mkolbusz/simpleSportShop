export class Product {
    $key: string;
    qty: number;
    isSoldOut: boolean;

    constructor(
        private id: number,
        private name: string,
        private description: string,
        public qtyAvailable: number,
        private price: number,
        private image: string,
        public category: string
    ) {
        this.isSoldOut = false;
        this.qty = 0;
    }

    isAvailable() {
        return !this.isSoldOut;
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
