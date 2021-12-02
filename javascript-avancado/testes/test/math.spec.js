const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect; // importando a função expect
const sinon = require('sinon')

describe('Classe matematica', function() {

    /** devemos utilizar evitar arrow functions, pelo fato de não termos controle sobre o contexto
     * do teste a ser executado, não podemos alterar um timeout dentro de uma arrow function
     */

    //hooks 
    /**executar códigos sem necessidade de repeti-los 
     * antes de cada teste instancie um objeto math
     * outros metodos tambem:
     *  - beforeAll -> antes de tudo
     *  - afterAll -> depois de tudo
     * before
     * after
    */
    beforeEach(function() {
        const math = new Math()
    })

    this.afterEach(function(){
        console.log('Afterall sendo executado')
    })

    // o assert serve para que caso os erros ocorram, o tratamento seja automatico
    // esse objeto possui varios metodos, entre eles o equal (verifica igualdade de dois parametros)
    // skip -> pula o teste
    it.skip('Somar dois numeros',function() {
        const math = new Math()
        assert.equal(math.sum(5,5), 10)
    })

    /**Colocando only apenas esse teste será executado */
    it('Multiplicar dois numeros', function() {
        const math = new Math()
        // assert.equal(math.mul(5,5),25)
        expect(math.mul(5,5)).to.equal(25)
        /**usando a lib chai podemos deixar a leitura do código mais linear
         * na linha acima estamos usando expect passando como parametro mul e
         * verificando se o seu retorno é igual a 25
         */
    })

    /**A função para dividir é assincrona */
    it('Divide dois numeros', function(done) {
        const math = new Math()
        math.div(5,5,value => {
            assert.equal(value, 1)
            /**done é um metodo que vai ser executado ao final, para informar que tudo 
             * ocorreu como o esperado, nesse caso, a função sendo assincrona , o calback 
             * sera executado
             * Podemos acessar propriedades de objetos e fazer validações
             */
            const user = {
                name: 'octa'
            }
            expect(user).to.have.property('name').equal('octa')
            done()
        });
    })

    /** usando sinon */
    it.only('Chamada res com uma soma e index como valor',function() {
        const req = {}
        const res = {
            load: function load() {
                console.log('Função Chamada!')
            }
        }
        sinon.spy(res,'load')
    })
})