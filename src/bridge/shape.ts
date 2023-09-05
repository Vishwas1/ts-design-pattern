import { Square } from "./square";
import { Circle } from "./circle";

interface IShape {
    area(): number;
}

export default class Shape implements IShape {
    #shapeType: Square | Circle
    constructor(shapeType: Square | Circle){
        this.#shapeType = shapeType;
    }
    area(): number {
        return this.#shapeType.area();
    }
}

