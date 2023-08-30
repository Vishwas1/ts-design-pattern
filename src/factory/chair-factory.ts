import { IChair } from '../products/chair/chair'
import SmallChair from '../products/chair/small-chair'
import MediumChair from '../products/chair/medium-chair'
import BigChair from '../products/chair/big-chair'
export default class ChairFactory {
    static getChair(size: string): IChair {
        if(size === 'SmallChair') {
            return new SmallChair()
        } else if(size === 'MediumChair') {
            return new MediumChair()
        } else {
            return new BigChair()
        }

    }
}

