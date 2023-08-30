import { log } from "console"
import { Creator } from './factory/factory-concept'

log(Creator.createObject('a').name)
log(Creator.createObject('b').name)
log(Creator.createObject('c').name)
log(Creator.createObject('e').name)


