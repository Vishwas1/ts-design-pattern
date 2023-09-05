interface ICircle{
    radius: number
    area(): number
}

export class Circle implements ICircle {
    radius: number;
    constructor(radius: number) { 
        this.radius = radius
    }

    area(): number {
        return Math.PI * (this.radius^2)    
    }
}