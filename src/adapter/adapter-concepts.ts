

interface IA{
    methodA():void;    
}

interface IB{
    methodB() :void;  
}

export class ClassA implements IA {
    methodA(){
        console.log('Method A')
    }
}

export class ClassB implements IB{
    methodB(){
        console.log('Method B')
    }
}

export class ClassBAdapter implements IA {
    // classB does not have methodA, so we create an adapter

    #classB: ClassB
    constructor(){
        this.#classB = new ClassB()
    }

    methodA(): void{
        // calls the class b method B insreate
        this.#classB.methodB()
    }
}