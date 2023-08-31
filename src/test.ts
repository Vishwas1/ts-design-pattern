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

log(' Prototype Design usecase --------------------------------')

import Document from './prototype/document'

const originalDocument = new Document('Original Doc', [
    [1,2,3,4],
    [5,6,7,8]
] )
const newdoc1 = originalDocument.clone('shallow')
newdoc1.name = 'new_doc_1'
newdoc1.list[1][2] = 100
log(originalDocument)
log(newdoc1)


const newdoc2 = originalDocument.clone('deep')
newdoc2.name = 'new_doc_2'
newdoc2.list[1][2] = 200
log(originalDocument)
log(newdoc2)

const newdoc3 = newdoc2.clone('deep')
newdoc3.name = 'new_doc_3'
newdoc3.list[0][1] = 1000
log(newdoc2)
log(newdoc3)


// ---------------------------- Singleton Pattern ------------------------------------
/// Concepts
log(' Singleton concepts --------------------------------')
import { Singleton, Singleton2 } from './singleton/singleton-concepts'

/// Way1
const single1 = new Singleton(1, 'first') 
const single2 = new Singleton(2, 'second') ;

// Both will return 1 | first; that means our Singleton class is Singleton and no matter 
// how many objects you create, it will only create one object
single1.info();
single2.info();

/// Way2
const single21 = Singleton2.getInsance()
single21.id = 1
single21.name = 'first'

const single22 = Singleton2.getInsance() ;
single22.id = 2
single22.name = 'Second'

single21.info();
single22.info();


