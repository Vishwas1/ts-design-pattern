import House from './house'
import { HouseBuilder } from './house-builder'

export default class CastleDirector {
    static construct(): House {
        return new HouseBuilder()
        .setNumberDoors(10)
        .setNumberWalls(16)
        .setNumberWindow(10)
        .setBuilderType('Castle')
        .getResult()
    }
}