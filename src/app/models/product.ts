import { AppSettings } from '../app-settings';
export class Product {

    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public qty: number,
        public price: number,
        public image: string,
        public category: string
    ) {
    }

    static fromJsonObject(obj: any): Product {
        return new Product(obj.id, obj.name, obj.description, obj.number, obj.price, obj.image, obj.category);
    }

    isAvailable(): Boolean {
        return this.qty > 0;
    }

    getImageUrl() {
        return AppSettings.DB_API_ENDPOINT + '/assets/images/products/' + this._id + '/' + this.image;
    }

    public getId(): string {
        return this._id;
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
