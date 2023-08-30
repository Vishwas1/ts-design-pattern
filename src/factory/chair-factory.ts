import { IChair } from '../tools/chair/chair'
import SmallChair from '../tools/chair/small-chair'
import MediumChair from '../tools/chair/medium-chair'
import BigChair from '../tools/chair/big-chair'
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

