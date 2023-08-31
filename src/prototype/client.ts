import Document from './document'

const doc = new Document('Original', [
    [1,2,3,4],
    [5,6,7,8]
] )
doc.clone('shallow')

