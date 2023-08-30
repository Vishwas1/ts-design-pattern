import { IChair } from './chair'
import SmallChair from './small-chair'
import MediumChair from './medium-chair'
import BigChair from './big-chair'
export default class ChairFactory {
    static getChair(size: string): IChair {
        if(size === 'small') {
            return new SmallChair()
        } else if(size === 'medium') {
            return new MediumChair()
        } else {
            return new BigChair()
        }

    }
}

