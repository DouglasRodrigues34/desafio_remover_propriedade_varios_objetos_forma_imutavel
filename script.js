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

// const removeProp = (propToRemove, objs) => {
//     objs.map(({ [propToRemove]: _, ...obj }) => obj)
// }

// log(removeProp(propToRemove, objs)[0] === objs[0])
// log(removeProp(propToRemove, objs))

// removeProp(propToRemove, objs)

function removeProp(prop, objs) {
    return objs.map(obj => {
        const { [prop]: _, ...newObj } = obj;
        return newObj;
    });
}

const newObjs = removeProp(propToRemove, objs);
console.log(newObjs);