import House from './house';

export interface IHouseBuilder {
    setBuilderType(type: string) : this
    setNumberWalls(wallsCount: number) : this
    setNumberWindow(windowCount: number) : this
    setNumberDoors(doorCount: number) : this
    getResult() : House
}


export class HouseBuilder implements IHouseBuilder {
    house: House 
    constructor(){
        this.house = new House()
    }

    setBuilderType(type: string) : this {
        this.house.buildingType = type
        return this
    }
    setNumberWalls(wallsCount: number) : this {
        this.house.walls = wallsCount
        return this

    }
    setNumberWindow(windowCount: number) : this {
        this.house.windows = windowCount
        return this

    }
    setNumberDoors(doorCount: number) : this {
        this.house.doors = doorCount
        return this
    }
    getResult() : House {
        return this.house
    }
}

