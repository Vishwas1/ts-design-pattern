import House from './house'
import { HouseBuilder } from './house-builder'

export default class HouseBoatDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuilderType('House Boat')
            .setNumberDoors(2)
            .setNumberWalls(4)
            .setNumberWindow(4)
            .getResult()
    }
}