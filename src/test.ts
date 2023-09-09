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

log(' Singleton usecases --------------------------------')



import Game1 from './singleton/game1';
import Game2 from './singleton/game2';
import Game3 from './singleton/game3';

const game1 = new Game1();
game1.addWinner(2, 'vishwas')

const game2 = new Game2();
game2.addWinner(1, 'amit')

const game3 = new Game3();
game3.addWinner(3, 'rohit')

/// See all games are refering to the smae leaderboard because of singleton
game1.leaderBoard.print()
game2.leaderBoard.print()
game3.leaderBoard.print()


// ---------------------------- Decorator Design Pattern ------------------------------------
/// Concepts
log(' Decorator Design concepts --------------------------------')
import { Decorator, Component } from "./decorator/decorator-concepts"
const component = new Component();
log(component.method())

const decorator = new Decorator(component);
log(decorator.method())

const decorator2 = new Decorator(decorator);
log(decorator2.method())


// ----------------------------  Adapter Pattern ------------------------------------
log(' Decorator Design concepts --------------------------------')
import { ClassA, ClassBAdapter, ClassB } from './adapter/adapter-concepts'

// non adapater 
const  items = [new ClassA(), new ClassB()]
items.forEach(item => {
    if(item instanceof ClassA) {
        item.methodA()
    } else {
        item.methodB()
    }
})

// with adapter 
const  items2 = [new ClassA(), new ClassBAdapter()]
items2.forEach(item => {
    item.methodA()
})

log(' Decorator Design usecase --------------------------------')
import { CubeA }from './adapter/cubeA'
import CubeBAdapater from './adapter/cubeBAdapter'

let counter = 0
const totalCounter = 5
const manufacture = () => {
    
    function getRandom(){
        return Math.floor(Math.random() * 10) + 1
    }

    const width = getRandom()
    const height = getRandom()
    const depth = getRandom()

    let cube = new CubeA()
    let success = cube.manufacture(width, height, depth)
    if(success){
        counter++; 
        // console.log('Company A successfully manufactured cube '+ counter)
    } else {
        console.log('Company A is busy, lets try company B via CubeBAdapater')
        cube  = new CubeBAdapater()
        success = cube.manufacture(width, height, depth)
        if(success){
            counter++;
            // console.log('Company B successfully manufactured cube '+ counter)
        } else {
            console.log('Company B is busy, tring company A')
        }
    }
}



const interval = setInterval(() => {
    manufacture();
    if(counter >= totalCounter){
        clearInterval(interval);
        console.log(`${totalCounter} cubes have been successfully manufactured`)
    }
},  1000)


// ----------------------------  Bridge Pattern ------------------------------------
log(' Bridge Design usecase --------------------------------')
import Shape from './bridge/shape'
import { Circle } from './bridge/circle'
import { Square }  from './bridge/square'

const square = new Square(12,12);
const circle = new Circle(10);

const shapeCircle = new Shape(circle)
log(`Area of Circle =` + shapeCircle.area())


const shapeSquare = new Shape(square)
log(`Area of Circle =` + shapeSquare.area())


// ----------------------------  Composite Pattern ------------------------------------
log(' Composite Design concepts --------------------------------')
import { Leaf, Composite } from './composite/composite-concepts'
const leafA = new Leaf('leaf-a');
const leafB = new Leaf('leaf-b');

const compositeA = new Composite('composite-a');
compositeA.attach(leafA);


const compositeb = new Composite('composite-b');
compositeb.attach(leafA);

compositeb.attach(compositeA)

leafB.method()
compositeb.method()

log(' Composite Design usecases --------------------------------')
import File from './composite/file'
import Folder from './composite/folder'

const file1 = new File('file1.ts');
const file2 = new File('file1.js');

const folderSrc = new Folder('src');
const folderDist = new Folder('dist');

folderSrc.attach(file1)
folderDist.attach(file2)
folderSrc.attach(folderDist)
folderSrc.dir(' ')

file2.detach()
folderSrc.dir(' ')


// ----------------------------  Proxy Pattern ------------------------------------
log(' Proxy Design concepts --------------------------------')
import { ProxySubject } from "./proxy/proxy-concept"

const proxySubject = new ProxySubject()
log(proxySubject.request())

log(proxySubject.request())

log(' Proxy Design usecase --------------------------------') 
import Lion from './proxy/lion'
const lion  = new Lion()
lion.tellMeTheFuture()
lion.tellMeYourForm()
lion.tellMeTheFuture()
lion.tellMeYourForm()
lion.tellMeTheFuture()
lion.tellMeYourForm()
lion.tellMeTheFuture()
lion.tellMeYourForm()
lion.tellMeTheFuture()
lion.tellMeYourForm()









