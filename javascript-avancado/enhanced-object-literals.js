/* ao declarar objetos literarais podemos simplesmente 
adicionar uma variavel a esse objeto, que contenha um determinado valor
como abaixo
*/
const name = 'octacilio'
const email = 'octa@gmail.com'
const user = {
    name,
    email
}
console.log(user)

// o mesmo vale para métodos, que podem ser adicionados apenas fornecendo o nome

function getName() { return this.name}
const user2 =  {
    name,
    email,
    getName
}

console.log(user2.getName())

/**podemos também definir em um objeto literal um método/função sem usar funtion
 * apenas fornecendo o nome da função e o corpo, como no exemplo abaixo
 */

const obj = {
    name,
    email,
    getData(){
        return `${this.name} ${this.email}`
    }
}
console.log(obj.getData())
/**
 * Com o ES6 podemos atribuir o nome de uma propriedade de um objeto da 
 * seguinte forma 
 */

const objName = 'name'
const objEmail = 'email'
const objectt = {
    [objName]: 'Roxas',
    objEmail: 'gmail.com'
}

console.log(objectt)