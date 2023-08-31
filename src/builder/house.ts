

export default class House {
    buildingType: string = '';
    doors: number = 0;
    walls :  number = 0;
    windows: number = 0;

    construction(): string {
        return `This is ${this.buildingType} with ${this.doors} door(s) and ${this.walls} wall(s) and ${this.windows} window(s) !!!!`
    }
}