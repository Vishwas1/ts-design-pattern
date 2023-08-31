class Product {
    parts: string[]   = [];
}

interface IBuilder {
    buildPartA(): this
    buildPartB(): this
    buildPartC(): this
    getResult(): Product
}


class Builder implements IBuilder {

    product: Product;

    constructor() {
        this.product = new Product();
    }

    // note we are returning this so that we can chain this with other methods
    buildPartA(): this {
        this.product.parts.push('a')
        return this;
    }

    // note we are returning this so that we can chain this with other methods
    buildPartB(): this {
        this.product.parts.push('b')
        return this;
    }

    // note we are returning this so that we can chain this with other methods
    buildPartC(): this {
        this.product.parts.push('c')
        return this;
    }

    getResult(): Product { 
        return this.product
    }
}


export class Director {
    /// Here Director is doing all hard work of building this product, client just have to call this method
    static construct(){
        // note how these methods are chained and return a product
        return new Builder().buildPartA().buildPartB().buildPartC().getResult()
    }
}


// const product1 = Director.construct()
// console.log(product1.parts)
