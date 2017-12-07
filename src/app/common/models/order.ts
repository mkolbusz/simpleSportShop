import { Client } from './client';
import { CartProduct } from './cart-product';

export enum OrderStatus {
    WAITING_FOR_ACTIVATION,
    CONFIRMED,
    CANCELED
}

export class Order {

    constructor(
        private id: string,
        private products: CartProduct[],
        public client: Client,
        private status: OrderStatus = OrderStatus.WAITING_FOR_ACTIVATION
    ) {
    }

    getId(): string {
        return this.id;
    }

    getProdcuts(): CartProduct[] {
        return this.products;
    }

    getClient(): Client {
        return this.client;
    }

    setProducts(cartProducts: CartProduct[]) {
        this.products = cartProducts;
    }

    setStatus(status: OrderStatus) {
        this.status = status;
    }

    getStatus(): OrderStatus {
        return this.status;
    }

    getTotal(): number {
        return this.products.reduce((prev, current) => prev + current.getTotalPrice(), 0);
    }
}
