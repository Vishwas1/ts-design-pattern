import HouseBoatDirector from "./house-boat-director";
import CastleDirector from "./castle-director";
import IglooDirector from "./igloo-director";

const boatHouse = HouseBoatDirector.construct();
const igloo = IglooDirector.construct();
const castle = CastleDirector.construct();

console.log(boatHouse.construction())
console.log(igloo.construction())
console.log(castle.construction())



