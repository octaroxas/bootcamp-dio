let order = []
let clickedOrder = []
let score = 0;

/**0 -> verde
 * 1 > vermemlho
 * 2 > amarelo
 * 3 > azul
 */

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = []

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

function lightColor(element, number) {
    number = number * 500;
    setTimeout(()=> {
        element.classList.add('selected');
    }, number -250)

    setTimeout(()=> {
        element.classList.remove('selected')
    })
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver()
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação ${score} \n Você acertou! Iniciando o próximo nível!`)
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)

}

const createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2) {
        return yellow;
    }else if(color == 3) {
        return blue;
    }
}

function nextLevel() {
    score++;
    shuffleOrder();
}

function gameOver() {
    alert(`Pontuação: ${score}\n Você perdeu! Clique em OK para reiniciar!`)
    order = [];
    clickedOrder = []
    playGame()
}

let playGame = () => {
    score = 0;
    alert(`Bem vindo ao Game Genius! Iniciando novo jogo!`)
    nextLevel()
}

// green.addEventListener('click',click(0))
// red.addEventListener('click',click(1))
// yellow.addEventListener('click',click(2))
// blue.addEventListener('click',click(3))

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()