interface IDimension {
    height: number;
    width: number;
    depth: number;
}
export interface ITable {
    height: number;
    width: number;
    depth: number;
    getDimensions(): IDimension;
}

export class Table implements ITable{
    height:number = 0;
    width: number = 0;
    depth: number = 0;

    constructor(){}

    getDimensions(): IDimension {
        return {
            depth: this.depth ,
            height: this.height, 
            width: this.width
        }
    }
}

