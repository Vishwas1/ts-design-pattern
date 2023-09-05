interface ICompositeComponent {
    name: string;
    referenceToParent?: Composite;
    method(): void;
    detach(): void;
}

export class Leaf implements ICompositeComponent {
    name: string;
    referenceToParent?: Composite = undefined;
    constructor(name:string){
        this.name = name;
    }
    method(): void {
        const parent = this.referenceToParent ? this.referenceToParent.name : 'none';
        console.log(`<Leaf>\t\tname:${this.name}\tParent:\t${parent}`)

    }
    detach(): void {
        'Detaching this leaf from its parent composite'
        if (this.referenceToParent) {
            this.referenceToParent.delete(this)
        }
    }
}

export class Composite implements ICompositeComponent {
    // A composite can contain leaves and composites

    referenceToParent?: Composite
    components: ICompositeComponent[]
    name: string

    constructor(name: string) {
        this.name = name
        this.components = []
    }

    method(): void {
        const parent = this.referenceToParent
            ? this.referenceToParent.name
            : 'none'
        console.log(
            `<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`
        )
        this.components.forEach((component) => {
            component.method()
        })
    }

    attach(component: ICompositeComponent): void {
        // Detach leaf / composite from any current parent reference and
        // then set the parent reference to this composite
        component.detach()
        component.referenceToParent = this
        this.components.push(component)
    }

    delete(component: ICompositeComponent): void {
        // Removes leaf/composite from this composite this.components
        const index = this.components.indexOf(component)
        if (index > -1) {
            this.components.splice(index, 1)
        }
    }

    detach(): void {
        // Detaching this composite from its parent composite
        if (this.referenceToParent) {
            this.referenceToParent.delete(this)
            this.referenceToParent = undefined
        }
    }
}