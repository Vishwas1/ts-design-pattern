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

import { AbstractFactory } from './abstract-factory/abstract-factory-concept'
log(AbstractFactory.createObject('ab'))

import FunitureFactory from "./abstract-factory/furniture-factory"
log(FunitureFactory.getFurniture('BigTable'))
log(FunitureFactory.getFurniture('SmallChair'))
