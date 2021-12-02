// Destructuring, como o nome sugere, permite que possamos dividir os valores de um array ou objeto
/**para atribuir a outras variáveis */

const linguagens = ['js','c','php','java']

const [l1,l2,l3] = linguagens
console.log(l3)

// desestruturação com objetos

var obj = {
    name: 'oct'
}
//defino as variaveis que receberao os valores
// abaixo a variavel nome vai receber o valor do atributo name contido em obj
var { name: nome } = obj
console.log(nome)

/**podemos desestruturar objetos dentro de objetos */
var user = {
    name:  'oct',
    endereco: {
        rua: 'a',
        numero: '218',
        cidade: 'stm'
    }
}

//definindo nomes personalizados para as variáveis
const { endereco: {rua:r, numero: n, cidade:c} } = user
//usando os mesmos nomes dos atributos
const { endereco: {rua, numero, cidade} } = user

console.log(`${r} ${n} ${c}`)
console.log(`${rua} ${numero} ${cidade}`)