import { ICubeA } from './cubeA'
import { CubeB } from './cubeB'



export default class CubeBAdapater implements ICubeA {
    #cubeB: CubeB;
    constructor(){
        this.#cubeB = new CubeB()
    }

    manufacture(width: number, height: number, depth: number): boolean{
       // doing some random conversiion
        return this.#cubeB.create(
            [width/2, height/2, depth/2], 
            [width/2, height/2, depth/2]
        )
    }

} 