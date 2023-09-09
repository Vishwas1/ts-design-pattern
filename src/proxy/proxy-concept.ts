interface ISubject {
    request(): number[]; 
}

class RealSubject implements ISubject {

        enormousData: number[];

        constructor() {
            this.enormousData = [1,2,3];    
        }


        request(): number[] {
            return this.enormousData;
        }

}

export class ProxySubject implements ISubject {

    enormousData: number[];
    realSubject: RealSubject;

    constructor() {
        this.enormousData = [];
        this.realSubject = new RealSubject();

    }


    request(): number[]{
        
        if(this.enormousData.length === 0){
            console.log('pulling data from real subjhect')

            this.enormousData = this.realSubject.request();
            return this.enormousData;
        } 

        console.log('pulling data from proxy cache')
        return this.enormousData;
    }

}