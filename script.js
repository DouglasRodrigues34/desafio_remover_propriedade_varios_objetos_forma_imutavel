/*
- Descomente a invocação da função removeProp e implemente-a;
- O output dela deve ser um array de novos objetos que não
    contém a propriedade b.
*/

const objs = [
    { a: 213, b: 965, c:522 },
    { c: 2333, a: 1321, b: 545 },
    { b: 993, c: 345, a: 781 }
]

const propToRemove = 'b'

removeProp(propToRemove, objs)