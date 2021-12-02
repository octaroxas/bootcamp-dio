// arrow function é uma nova maneira de declarar funções anonimas
/**
 * Arrow functions Não sofrem Hoisting (a elevação para o topo do escopo)
 */

// Calculo de média com arrow functions
var n1 = 10;
var n2 = 5;
var n3 = 6;
var n4 = 7;

// caso seja necessário declarar uma variavel em uma arrow function,
// em apenas uma linha não é preciso utilizar o return, pois o mesmo é implicito
const media = (n1,n2,n3,n4) => (n1+n2+n3+n4)/4;

// o uso de chaves {} é obrigatório
const media2 = (n1,n2,n3,n4) => {
    med = (n1+n2+n3+n4)/4;
    return med
};
console.log(media2(n1,n2,n3,n4))

// Caso uma arrow function retorne um objeto literal é necessário envolve-lo
//em parênteses pois as chaves também são utilizadas para delimitar a função
const user = () => ({name: 'octacilio', age: 21})
console.log(user())

// Um fato importante é que as arrow functions são capazes de 'lembrar'
//do contexto em que são inseridas, sem a necessidade do mesmo estar armazenado
//em uma variável por exemplo, se essa função está contida em um bloco delimitado por { }
//ela é capaz de lembrar do contexto desse bloco