import { Chair } from './chair'

export default class MediumChair extends Chair {
    constructor(){
        super();
        this.height = 50;
        this.width  = 50;
        this.depth  = 50 
    }
}