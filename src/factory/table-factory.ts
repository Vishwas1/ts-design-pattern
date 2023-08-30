import { ITable } from '../products/table/table'
import SmallTable from '../products/table/small-table'
import MediumTable from '../products/table/medium-table'
import BigTable from '../products/table/big-table'
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

