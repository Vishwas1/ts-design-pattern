interface IComponent {
    method(): string
}

export class Component implements IComponent {
    method(): string {
        return "Component Method"    
    }
}

export class Decorator implements IComponent {
    #object: IComponent
    constructor(object: IComponent) {
        this.#object = object   
    }

    method(): string {
        return `Decorator Method (${this.#object.method()})`
    }
}

