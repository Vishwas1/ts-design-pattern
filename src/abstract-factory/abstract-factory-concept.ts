interface IProductA {
    name :string;
}

class ConcreteProduct implements IProductA {
    name: string = '';
}

class ConcreteProductA extends ConcreteProduct {
    constructor(factoryName: string) {
        super()
        this.name = factoryName + ':' + this.constructor.name
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor(factoryName: string) {
        super()
        this.name = factoryName + ':' + this.constructor.name
    }
}

class FactoryA {
    static createObject(productType: string): IProductA | undefined {
        try{
            if(productType === 'a'){
                return new ConcreteProductA('FactoryA')
            } else if(productType === 'b') {
                return new ConcreteProductB('FactoryA')
            } else {
                throw new Error('No such product found')
            }
        } catch(error){
            console.error(error)
        }
    }
}

class FactoryB {
    static createObject(productType: string): IProductA | undefined {
        try{
            if(productType === 'a'){
                return new ConcreteProductA('FactoryB')
            } else if(productType === 'b') {
                return new ConcreteProductB('FactoryB')
            } else {
                throw new Error('No such product found')
            }
        } catch(error){
            console.error(error)
        }
    }
}


export class AbstractFactory {
    static createObject(factory: string): IProductA | undefined {
        try{
            if(["aa", "ab"].indexOf(factory) > -1){
                return FactoryA.createObject(factory[1])
            } else if(["ba", "bb"].indexOf(factory)> -1) {
                return FactoryB.createObject(factory[1])
            } else {
                throw new Error('No such factory found')
            }
        } catch(error){
            console.error(error)
        }
    }
}
