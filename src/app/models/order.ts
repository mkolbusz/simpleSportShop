import { Client } from './client';
import { CartProduct } from './cart-product';
export class Order {
    products: CartProduct[];
    client: Client;

    constructor(products: CartProduct[], client: Client) {
        this.products = products;
        this.client = client;
    }

    getProdcuts(): CartProduct[] {
        return this.products;
    }

    getClient(): Client {
        return this.client;
    }
}
