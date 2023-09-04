interface ICubeB {
    create(
        top_left_front: [number, number, number],
        bottom_right_back: [number, number, number]
    ): boolean ;    
}

export class CubeB implements ICubeB {
    static last_time = Date.now()

    constructor(){
    }

    create( top_left_front: [number, number, number],
        bottom_right_back: [number, number, number]): boolean {
        const now = Date.now()
        if(now > CubeB.last_time  + 3000){
            console.log(`Company B built Cube with coordinates [${top_left_front[0]}, ${top_left_front[1], bottom_right_back[0]}]`)
            CubeB.last_time = now
            return true
        } else{
            return false // busy    
        }

    }


}

