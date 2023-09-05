import Folder from './folder'

export default interface IComponent {
    referenceToParent?: Folder
    dir(indent: string): void;
    detach(): void; 
}


