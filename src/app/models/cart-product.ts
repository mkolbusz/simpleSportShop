import { Product } from "./product";

export class CartProduct {
    static lastId: number = 0;
    id: number;
    product: Product;
    qty: number;

    constructor(product: Product, qty: number) {
        this.id = ++CartProduct.lastId;
        this.product = product;
        this.qty = qty;
    }

    getPrice(): number {
        return this.product.getPrice();
    };

    getName(): string {
        return this.product.getName();
    }

    getDescription(): string {
        return this.product.getDescription();
    };

    getProduct(): Product {
        return this.product;
    }

    getQty(): number {
        return this.qty;
    }

    getTotalPrice(): number {
       return this.getPrice() * this.getQty(); 
    }
}
