 interface IProtoType {
    shallowClone(): this
    deepClone(): this
 }


export default class MyClass implements IProtoType {

    fields : number[];

    constructor(fields: number[]) {
        this.fields = fields;
    }

    shallowClone(): this {
        
        return Object.assign({},this)
    }

    deepClone(): this {
        return JSON.parse(JSON.stringify(this))
    }
 }