import { AppSettings } from '../app-settings';
export class Product {

    public isPromoted: boolean;

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public qty: number,
        public price: number,
        public images: string[],
        public category: string,
    ) {
        this.isPromoted = false;
    }

    static fromJsonObject(obj: any): Product {
        return new Product(obj.id, obj.name, obj.description, obj.number, obj.price, obj.images, obj.category);
    }

    isAvailable(): Boolean {
        return this.qty > 0;
    }

    getImageUrl(image) {
        return AppSettings.API_URL + '/assets/images/products/' + this.id + '/' + image;
    }

    public getId(): string {
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
