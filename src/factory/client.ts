import { log } from 'console';
import ChairFactory from './chair-factory'

const chair = ChairFactory.getChair('small');
log(chair.getDimensions())


