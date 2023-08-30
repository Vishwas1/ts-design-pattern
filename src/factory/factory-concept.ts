interface IProduct {
    name: string; 
}

class ConcreteProduct implements IProduct {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor(){
        super();
        this.name = this.constructor.name;
    }
}


class ConcreteProductB extends ConcreteProduct {
    constructor(){
        super();
        this.name = this.constructor.name;
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor(){
        super();
        this.name = this.constructor.name;
    }
}


/// Factory class which creates classes 
export class Creator {
    static createObject(someProperty: string): IProduct {
        if(someProperty === 'a'){
            return new ConcreteProductA()
        } else if(someProperty === 'b'){
            return new ConcreteProductB()
        } else {
            return new ConcreteProductC()
        } 
    }    
}


