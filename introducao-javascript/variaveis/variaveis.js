/**
 * No Javascript podemos declarar variáveis de 3 formas
 *  - let   nomeDaVariavel
 *  - var   nomeDaVariavel
 *  - const nomeDaVariavel
 * 
 * variaveis criadas com var respeitam escopos globais e de função apenas
 * 
 * let e const respeitam escopos de blocos, como espaços definidos em ifs, fors e outras estruturas 
 * demarcadas com { }
 * 
 * Hoisting:
 *      De variaveis: a declaração das variáveis é colocada no topo do escopo, mas não sua inicialização
 *      De funções: toda a função é colocada no topo do escopo
 *      
 */

var nome = "Octacilio"
const idade = 21
let usuario = {
    nome: nome,
    idade: idade
}

console.log(usuario)

/**
 * Variaveis constantes (const), quando atribuidos valores de tipos primitivos, tornam-se imutaveis.
 * Caso sejam atribuidos objetos ou arrays por exemplo, apenas seus valores podem ser alterados
 * a reatribuição não é permitida
 */

const octacilio = {
    nome: "Octacilio",
    sobreNome: "Carvalho",
    idade: "21",
    genero: "M"
}

console.log(octacilio)

octacilio.nome = "joao"
console.log(octacilio)

// A reatribuição abaixo não é permitida
octacilio = {
    e:"rfjgr",
    r: "dejdi"
}