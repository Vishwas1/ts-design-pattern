interface IProtoType {
    clone(mode: string): Document
}


export default class Document implements IProtoType {

    name :string;
    list: [number[], number[]]

    constructor(name: string, list: [number[], number[]]){
        this.name = name;
        this.list = list;
    }

    clone(mode: string): Document {

        let arr 
        if(mode === 'shallow'){
            arr  = Object.assign([], this.list)
            // shallo copy
        }else {
            // deep copy
            arr  = JSON.parse(JSON.stringify(this.list));
        }
        return new Document(this.name, arr)
    }
}
