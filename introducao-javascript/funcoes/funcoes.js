/* Funcões de primeira classe: 
    - podem ser atribuidas a variáveis, estuturas de dados (arrays por exemplo) 
    e passadas como argumento para outras funções
*/

// Definição comum
function boaNoite() {
    return 'Boa noite!'
}

//atribuindo uma função a uma variável
var bomDia = () => {
    return 'Bom dia!'
}

// Podemos fornecer uma função como parâmetro e executa-la dentro de outra funcao
function saldacao(funcao) {
    console.log(funcao())
}

saldacao(boaNoite)
saldacao(bomDia)

// Arrow functions 
// Caso não seja utilizado o return não é necessário colocar entre chaves
const saudadacao = () => 'Bom Dia'

const bomDia = () => {
    var msg = 'Bomdia'

    return msg;
}
