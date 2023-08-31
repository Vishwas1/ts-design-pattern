import { log } from "console"
import { Creator } from './factory/factory-concept'

log(Creator.createObject('a').name)
log(Creator.createObject('b').name)
log(Creator.createObject('c').name)
log(Creator.createObject('e').name)


// ---------------------------- Factory Pattern ------------------------------------

import ChairFactory from './factory/chair-factory'

const chair = ChairFactory.getChair('SmallChair');
log(chair.getDimensions())

// ---------------------------- Abstract Factory Pattern ------------------------------------
//// Concepts
log(' Abstract Factory Pattern concepts --------------------------------')
import { AbstractFactory } from './abstract-factory/abstract-factory-concept'
log(AbstractFactory.createObject('ab'))

log(' Abstract Factory Pattern usecases --------------------------------')
import FunitureFactory from "./abstract-factory/furniture-factory"
log(FunitureFactory.getFurniture('BigTable'))
log(FunitureFactory.getFurniture('SmallChair'))


// ---------------------------- Builder Pattern ------------------------------------
//// Concepts
log(' Builder Pattern concepts --------------------------------')
import { Director } from './builder/builder-concept'
const product1 = Director.construct()
log(product1.parts)


log(' Builder Pattern usecases --------------------------------')
import HouseBoatDirector from "./builder/house-boat-director";
import CastleDirector from "./builder/castle-director";
import IglooDirector from "./builder/igloo-director";

const boatHouse = HouseBoatDirector.construct();
const igloo = IglooDirector.construct();
const castle = CastleDirector.construct();

console.log(boatHouse.construction())
console.log(igloo.construction())
console.log(castle.construction())


// ---------------------------- Prototype Design Pattern ------------------------------------
/// Concepts
log(' Prototype Design concepts --------------------------------')
import MyClass from './prototype/prototype-concepts'
const object1 = new MyClass([1,2,3,4])
log('object1: ' + JSON.stringify(object1))

const object2 = object1.shallowClone()
log('object2: ' + JSON.stringify(object2))

/// Merly changin object2, object1 is also changing -  thats shallow copy
object2.fields[2] = 100
log('object1: ' + JSON.stringify(object1))
log('object2: ' + JSON.stringify(object2))

///  but in case of deepcopy, changing object3, object 1 is unaffected
const object3 = object1.deepClone()
log('object3: ' + JSON.stringify(object3))
object3.fields[2] = 200
log('object1: ' + JSON.stringify(object1))
log('object3: ' + JSON.stringify(object3))

