import House from './house'
import { HouseBuilder } from './house-builder'

export default class IglooDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuilderType('Igloo')
            .setNumberDoors(1)
            .setNumberWalls(4)
            .getResult()
    }
}