/**
 * Symbols e iterators
 * 
 * Symbols são únicos 
 */

const idUnico = Symbol('s');
const idUnico2 = Symbol('s');
console.log(idUnico)
/** ao definir um sumbol como o nome de uma propriedade de um objeto
 * a mesma fica de certa forma privada, não acessível por métodos mais comuns 
 * como Object.keys(objectName)
 * E sim por Object.getOwnProperties.Symbols(objectName)
 */

const user = {
    [idUnico]: 'id'
}
// o atributo idUnico so podera ser visualizado com Object.getOwnProperties.Symbols(user)

/**Symbols possuem um série de propriedades
 *  chamadas de Well Known symbols
    objetos que possuem Symbol.iterator, arrays por exemplo, são capazes de serem iterados
*/

//com o for of podemos iterar arrays e strings
const arr = ['q','e',4,326]
const words = 'Final Fantasy x'
//itera a string
for (let l of words) {
    console.log(l)
}

//itera o array
for (let l of arr) {
    console.log(l)
}


