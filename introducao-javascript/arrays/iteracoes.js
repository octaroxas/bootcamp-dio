let numbers = [1,2,3,4,5,6,7,8,9]

// item -> item iterado no momento
// index -> indice do item iterado
// não altera o array iterado e não retorna um novo array
numbers.forEach((item, index) => {
    console.log(`indice: ${index} -> value: ${item}`)
})

// map itera o array mas retorna um novo array com base na funcao passada

const nArr = numbers.map((item, index) => {
    if (item > 4) {
        return item;
    }
} )
console.log(nArr) // retorna apenas os itens do array que são maiores que 4

// o método flat retorna um único array contendo todos os itens dos subarrays de acordo com a
//profundidade especificada (depth)
// arr.flat(depth)
// arr.flat() valor padrão é 1
const nomes = ['octacilio', 'roxas',['jubiscleiton','Jeffin',['oitão']]];

const n = nomes.flat(1)
console.log(n)
// remocecar de 5min12

// flatMap -> executa um o map e depois um flat de profundidade 1
n.flatMap((item) => item * 2)

// keys -> retorna um iteratoe com as chaves dos valores daquele array
const s = [1,1,2,3,45,324]
const iterator = s.keys()
console.log(iterator.next())
// saida -> { value: 0, done: false}

// values -> retorna os valores de cada item do array
const iteValues = s.values()
console.log(iteValues.next())
// saida -> { value: 1, done: false}
// entries -> retorna um par, uma chave de acesso e seu valor corespondente
const iteEntries = s.entries()
iteEntries.next()
console.log(iteEntries.next())
// saida -> { value: [0,1], done: false}

// BUsca por elementos

//funcao find -> retorna o primeiro item que satsfaz uma condição
console.log(s.find(value => value > 3));

// findIndex -> retorna o indice do elemento que satifaz a condição
console.log(s.findIndex(value=> value > 3))

//filter -> retorna um array que satifaz uma condição
console.log(s.filter(value => value > 3))

// indexOf -> retorna o indice da primeira ocorencia de um elemento no array
// lastIndexOf -> retorna a ultima ocorrencia

// includes -> retorna true se o elemento informado estiver contido no array, e false caso contrario

//some -> retorna true se pelo menos um item do array satifaz a uma condição
// every -> retorna true se todos os elementos satifazem a condição
// sort -> ordena os elementos por uma condição
// reverse -> inverte a ordem dos itens de um array

//join -> retorna uma string contendo os itens do array separados por um delimitador
s.join('-')

// reduce -> retorna um novo tipo de dado, a ser especificado por nós, pode ser um number, string
//ou outro array

const reducebou = s.reduce((total, value) => total += value + value, 0) /s.length
console.log(reducebou)







