/// Way 1
// Client will be able to create multiple objects but it will all same
export class Singleton {
    static instance : Singleton;
    id: number
    name: string
    constructor(id: number, name:string) {
        this.id = id;
        this.name = name;
        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this
    }

    info(){
        console.log('InstanceId & name: ' + this.id + ' | ' + this.name)
    }
}

// way 2: Another way is , here restricing client to event create multiple objects. only one object can be created
export class Singleton2 {
    static instace : Singleton2;
    id: number = 0
    name: string = ''
    private constructor(){}
    static getInsance(): Singleton2{
        if(this.instace){
            return this.instace;
        }

        return new Singleton2();
    }

    info(){
        console.log('InstanceId & name: ' + this.id + ' | ' + this.name)
    }
}