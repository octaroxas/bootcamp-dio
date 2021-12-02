class Animal {
    #especie = '' // o # diz que o atributo especie e patas é privado (implementações mais recentes do node)
    #qtdPatas = 0
    constructor(especie, qtdPatas) {
        this.#especie = especie
        this.#qtdPatas = qtdPatas
    }

    getEspecie() {
        return this.#especie;
    }

    setEspecie(especie) {
        this.#especie = especie;
    }

    getQtdPatas() {
        return this.#qtdPatas;
    }

    setQtdPatas(qtdPatas) {
        this.#qtdPatas = qtdPatas;
    }

}

class Cachorro extends Animal {
    #nome = ''
    constructor(nome) {
        super()
        this.#nome = nome
    }

    getNome(){
        return this.#nome
    }

    setNome(nome) {
        this.#nome = nome
    }
}

let cachorro = new Cachorro('Katy')
cachorro.setEspecie('Anfibio')
cachorro.setQtdPatas(4)

console.log(`${cachorro.getNome() +' '+ cachorro.getQtdPatas() +' '+ cachorro.getEspecie()} `)