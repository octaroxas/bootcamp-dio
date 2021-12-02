let produtos = []

var codigo = "var nome = 'octacilio' var email = 'octa.oca44@gmail.com' "

produtos = Array.of('mouse','teclado','mousepad','gabinete','processador')

console.log(produtos)
produtos.pop() // remove no fim
console.log(produtos)
produtos.shift() // remove no inicio
console.log(produtos)
produtos.unshift('tstunshift') // insere no inicio
console.log(produtos)
produtos.push('pushitem') // insere no final
console.log(produtos) 

// a função concat faz a junção do conteudo de dois arrays e retorna um novo array contendo
//todos, mesmo que haja repetição de elementos

const ar1 = ['olaa','tudo bem?']
const ar2 = ['olaa','meu nome é octacilio']

const ar3 = ar1.concat(ar2)

console.log(ar3)
console.log('-----------------------------------------------------------------')

ar1.slice(0) // retorna todos os itens a partir do indice 0
ar1.slice(0,2) // retorna todos os itens de 0 até um indice antes do 2
ar2.splice(2) // remove todos os itens a partir do indice 2
console.log(ar2)

var ar4 = ar2.splice(1,0,'teste') 
// 
/*
    o primeiro parametro indica de qual indice se vai começar
    o segundo informa quantos itens serão excluidos
    o terceiro o que vai ser inserido
    obs: a referencia do objeto será alterada, então não é retornado um novo array
    
*/
console.log(ar2)

/**
 * 
 * 1 - recebe a string com todo o programa
 * 
 * 2 - retira todos os espaços tabulações etc.
 * 
 * 3 - faz a leitura de caractere por caractere.
 * 
 * 4 - a cada iteração verifica se aquela string corresponde a um padrão de identificador (expressão)
 *          obs: ao se deparar com o caractere fazio a string já deve ser salva como um identificador
 * 5 - se sim, essa string é armazenada em uma variavel e o token é criado
 * 
 * 6 - se não, 
 */