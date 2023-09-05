import IComponent from './i-component'
import Folder from './folder'

export default class File implements IComponent {
    name: string; 
    referenceToParent?: Folder = undefined;
    constructor(name:string) { 
        this.name = name
    }

    dir(indent: string): void {
        console.log(`${indent}<File> ${this.name}`)
    }

    detach(): void {
        if(this.referenceToParent){
            this.referenceToParent.delete(this)
        }

    }
}