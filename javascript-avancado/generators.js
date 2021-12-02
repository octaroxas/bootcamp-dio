//Generators
//funções que podem ser controladaas por meio de iterators
// funções com pause
// colocamos um * em frente a function para definir o generator
function* numbers() {
    let n = 0
    while(true) {
        console.log(n)
        yield n //yield faz com que a função pause sua execução, podendo ou nao retornar um valor
        n++        // nesse caso retorna o n
    }
}

/**utilizando o metodo next do iterator podemos controlar a execução da função */
//criando um iterator
const iterater = numbers();

iterater.next(); // 0
iterater.next(); // 1
iterater.next(); // 2
iterater.next(); // 3