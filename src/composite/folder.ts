import IComponent from './i-component'


export default class Folder implements IComponent {
    name: string; 
    referenceToParent?: Folder;

    components: IComponent[] 
    constructor(name:string) { 
        this.name = name
        this.components = []
    }
    dir(indent: string): void {
        console.log(`${indent}<Folder> ${this.name}`)
        this.components.forEach((component) => {
            component.dir(indent + '..');
        });

    }

    detach(): void {
        if(this.referenceToParent){
            this.referenceToParent.delete(this)
            this.referenceToParent = undefined
        }
    }

    attach(component: IComponent): void{
        component.detach()
        component.referenceToParent = this;
        this.components.push(component)
    }

    delete(component: IComponent): void {
        const index = this.components.indexOf(component)
        if (index > -1) {
            this.components.splice(index, 1)
        }
    }
}