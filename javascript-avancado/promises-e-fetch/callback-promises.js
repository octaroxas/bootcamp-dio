//Diferençade callback e promise
/**Callback são funções que são passadas como parâmetros e são executadas 
 * dentro de outra função após da execução de outras instruções,
 * mas é necessário que seja feito o tratamento de exceções para cada
 * execução de callback, o que pode deixar o código com uma legibilidade
 * muito ruim, com vários try cat aninhados 
*/

// function getNome(callback) {
//     setTimeout(()=>{
//         // executa instruções
//         callback({nome:'Octacilio'})
//     }, 1000)
// }

// function getLast(callback) {
//     setTimeout(()=>{
//         // executa instruções
//         callback({last: 'C. de Almeida'})
//     },1000)
// }

// function getData() {
//     try {

//         try {
//             getNome((nome)=> console.log(nome))
//         }catch (erro) {
//             
//         }
//         try {
//             getLast((last) => console.log(last))
//         } catch (erro) {
//             
//         }
//     } catch (erro) {
//         console.log(erro)
//     }
// }

// getData()

/**Promisse 
 * Uma promise possui 3 estados
 * -> Pending - ainda não foi concluida
 * -> FulFilled -> concluida
 * -> rejected -> deu erro
*/
const getNomePromise = () => new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        // executa instruções
        resolve({nome:'Octacilio'})
        
    }, 1000)
})

const getLastPromise = () => new Promise((resolve, reject) => {
    //throw new Error('Erro lala');
    setTimeout(()=>{
        // executa instruções
        resolve({last: 'C. de Almeida'})
    },1000)
})

// o then recebe o oque foi retornado se a promisse for resolved e coloca em 'data'
// que pode ser manipulado depois disso, inclusive, passado para outra promise
getNomePromise()
    .then((data) => { 
        return getLastPromise()
    })
    .then((data2) => { console.log(data2.last)})
    .catch(err => console.log(`catch: ${err}`))
//basta apenas um catch no fim para conseguir capturar qualquer erro nesse encadeamento de promises
/**Promises podem ser executadas em paralelo, basta usar o metodo all da Promise
 * a primeira promise que for resolvida sera retornada primeiro
 */
Promise.all(getNomePromise(),getLastPromise())
 
