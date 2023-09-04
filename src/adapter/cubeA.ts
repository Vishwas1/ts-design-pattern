export interface ICubeA {
    manufacture(width: number, height:number, depth: number): boolean;
}


export class CubeA implements ICubeA {
    static last_time = Date.now()
    constructor(){
    }

    manufacture(width: number, height:number, depth: number): boolean{
        const now = Date.now()
        if(now > CubeA.last_time + 1500){
            console.log(
                `Company A built cube with dimensions ${width}x${height}x${depth}`
            )
            CubeA.last_time = now
            return true
        }

        return false // busy
    }


}

