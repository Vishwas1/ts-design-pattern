import { CubeA }from './cubeA'
import CubeBAdapater from './cubeBAdapter'

let counter = 0
const totalCounter = 5
const manufacture = () => {
    
    function getRandom(){
        return Math.floor(Math.random() * 10) + 1
    }

    const width = getRandom()
    const height = getRandom()
    const depth = getRandom()

    let cube = new CubeA()
    let success = cube.manufacture(width, height, depth)
    if(success){
        counter++; 
        console.log('Company A successfully manufactured cube '+ counter)
    } else {
        console.log('Company A is busy, lets try company B via CubeBAdapater')
        cube  = new CubeBAdapater()
        success = cube.manufacture(width, height, depth)
        if(success){
            counter++;
            console.log('Company B successfully manufactured cube '+ counter)
        } else {
            console.log('Company B is busy, tring company A')
        }
    }
}



const interval = setInterval(() => {
    manufacture();
    if(counter >= totalCounter){
        clearInterval(interval);
        console.log(`${totalCounter} cubes have been successfully manufactured`)
    }
},  1000)

