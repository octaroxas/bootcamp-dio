/**
 * o Rest operator é utilizado para agrupar os argumentos de uma função em um array
 * Utilizando a sintaxe -> funtion nameFunction(...arrayName) {}
 * 
 * na frente dos três pontos devemos informar o nome do array de argumentos
 */

//Ex1
function listArgs(...args) {
    args.map((item, index)=> {
        console.log(`${index}: ${item}`)
    })
}

// listArgs(3,6,'43','oladisgrama','helou');

/**
 * Podemos definir pegar alguns parametros na função e o restante armazenar em um array
 */

//Ex2
function list(email, nome, ...dados){
    console.log(`${email +" "+ nome}`)
    dados.map((item)=> {
        console.log(item)
    })
}

// list('octa.oca44','octacilio','santarem','pa',84375849)

/**
 * O Spred operator atua de forma inversa ao Rest operator
 * Separando os itens de um array para passa-los como parâmetros
 * Pode ser usado em: strings, arrays, objetos e objetos iteráveis
 */

// const nome = 'Octacilio C. de Almeida'
/* como parametros de funções na definição, estamos utilizando o Rest Operator
Para pegar todos os argumentos,quantos eles sejam, e colocar no array
*/
const logName = (...arg) => { console.log(arg) }
/**
 * Aqui estamos fornecendo para a função um array contendo os caracteres da string já separados
 * Ou seja, o Spread operator
 */
logName(...nome)

/**Os operadores também podem ser utilizados para a criação de novos arrays, concatenando
 * seus valores
 */

const nome = ['Octa','Jeffin','junin','jubisclei']
const idade = [12,21,34,56,65]
const arr = [...nome, ...idade]
/**Utilizando o spread acima podemos desestruturar os arrays em itens individuais
 * e gerar um novo array com apenas uma dimensão.
 */

/**
 * Podemos utilizar o spread para gerar novos objetos literaris
 */

const obj = {
    n: 'octa',
    idade: 21
}
const user = {
    ...obj,
    email:'gmail'
}

console.log(user)

/**Se os objetos possuírem atributos com os mesmos nome, os atributos declarados primeiro
 * é que serão mantidos, a ordem em que o spread acontece importa nesses casos
 * 
 * Ao usar o spread para clonar um objeto, podemos alterar esse novo objeto sem mexer na referencia 
 * do objeto original
 */

