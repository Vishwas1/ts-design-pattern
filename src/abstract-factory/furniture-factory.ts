import TableFactory from '../factory/table-factory'
import ChairFactory from '../factory/chair-factory'
import { ITable } from '../products/table/table'
import { IChair } from '../products/chair/chair'


interface IFurniture extends ITable, IChair {}

export default class FunitureFactory {
    
    static getFurniture(furnitureType:string): IFurniture | undefined {
       try{
        if(['SmallChair', 'MediumChair', 'BigChair'].indexOf(furnitureType) > -1) {
            return ChairFactory.getChair(furnitureType)
        } else if(['SmallTable', 'MediumTable', 'BigTable'].indexOf(furnitureType) > -1){
            return TableFactory.getTable(furnitureType)
        } else {
            throw new Error('No Facotory found')
        }
       }catch(e){
        console.error(e)
       }
    }
}