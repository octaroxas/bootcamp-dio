const mul = (a, b=2) => a * b

//se b não for informado ele recebe o valor de a por padrão
const mul2 = (a, b=a) => a * b

function mult(a, b=2) {
    return a * b
}

console.log(mul(2))
console.log(mult(2))
console.log(mul(2, 5))

// Lazy evaluation
//atribuir um valor aleatorio a um parametro por padrão
const rand = () => Math.random()
function div(a,b = rand()) {
    
    console.log(`b: ${b} , result: ${a/b}`)
}

div(10)