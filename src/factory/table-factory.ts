import { ITable } from '../tools/table/table'
import SmallTable from '../tools/table/small-table'
import MediumTable from '../tools/table/medium-table'
import BigTable from '../tools/table/big-table'
export default class TableFactory {
    static getTable(size: string): ITable {
        if(size === 'SmallTable') {
            return new SmallTable()
        } else if(size === 'MediumTable') {
            return new MediumTable()
        } else {
            return new BigTable()
        }

    }
}

