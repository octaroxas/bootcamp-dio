var livros = ['O medico da HUmanidade', 'Genio e louco', 'Um estudo em vermelho', 'Mitologia Nordica']

//itera um objeto e retorna cada uma das propriedades
// nesse caso, retorna as chaves 'indices' do array
for (const livro in livros) {
    console.log(livro)
}

const user = {
    nome: 'octacilio',
    idade: 21
}

// Neste exemplo os atributos do objeto são retornado junto a seus valores

for (const prop in user) {
    console.log(prop + ' : '+ user[prop])
}