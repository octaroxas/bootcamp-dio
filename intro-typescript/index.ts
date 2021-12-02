/**dessa forma, definindo o tipo commo HTMLInputElement
 * podemos acessar os atributos dos inputs por exemplo e
 * fazer uso do autocomplete já que o editor já entende que 
 * aquele elemento possui aquelas propriedades, value por exemplo
 */
const input = document.getElementById('input') as HTMLInputElement;
input.value;

input.addEventListener('input', (event) => {
    const inputVal = event.currentTarget as HTMLInputElement;
    console.log(inputVal.value)
})




























// console.log('Running')

// function sum(a: number, b: number) {
//     return a + b
// }

// console.log(sum(5,3))

// /** types e interfaces */

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
// }

// const animal: IAnimal = {
//     nome: 'Macaco',
//     tipo: "terrestre"
// }

// interface Felino extends IAnimal {
//     visaoNoturna: boolean;
//     miar(intensidade: number): void;
// }

// const felino: Felino = {
//     nome: 'Sif',
//     tipo: 'terrestre',
//     visaoNoturna: true,
//     miar: (intens) => console.log(intens)
// }

// felino.miar(10)

// /** Ao utilizar o type devemos utilizar a atribuição '=' antes de abrir e fechar as chaves
//  * usados para fazer a junção de interfaces
//  */

// type A = IAnimal | Felino;

// //Dessa forma o objeto ani podera conter as propriedades da interface IAnimal ou Felino
// const ani: A = {
//     nome: 'ann',
//     tipo: "aquatico"
// }