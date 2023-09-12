
interface IObservable {
    
    subscribe(observer: IObserver): void

    unsubscribe(observer: IObserver): void

    notify(...args: unknown[]): void

}

interface IObserver{
    notify(...args: unknown[]): void
    
}

let COUNTER = 1;
export class Observer implements IObserver{
    #id: number
    constructor(observable: IObservable){
        this.#id = COUNTER++;
        observable.subscribe(this);
    }

    notify(...args: unknown[]): void {
        console.log(`Observer_${this.#id} received ${JSON.stringify(args)}`)
    }


}

export class Subject implements IObservable {

    #objservers : Set<IObserver>;
    constructor(){
        this.#objservers = new Set();
    }


    subscribe(observer: IObserver): void {
        this.#objservers.add(observer);
    }

    unsubscribe(observer: IObserver): void {
        this.#objservers.delete(observer);
    }

    notify(...args: unknown[]): void {
        this.#objservers.forEach(observer => {
            observer.notify(...args);
        })
    }

}