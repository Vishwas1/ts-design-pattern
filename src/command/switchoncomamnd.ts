import ISwitchCommand from './iswitchcommand'
import Light from './light';

export default class SwitchOnCommand implements ISwitchCommand {
    #light: Light


    constructor(light: Light){
        this.#light = light
    }

    execute(){
        this.#light.turnOff()
    }
}