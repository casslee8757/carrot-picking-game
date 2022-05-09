const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const field = document.querySelector('.game__field')
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button')
const gameTimer = document.querySelector('.game__score')

let started = false;
let score = 0;
let timer = undefined;

const initGame = () => {
    console.log(fieldRect);
    addItem('carrot', CARROT_COUNT, 'img/carrot.png')
    addItem('bug', BUG_COUNT, 'img/bug.png')
}

const addItem = (className, count, imgPath) => {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`
        item.style.top = `${y}px`
        field.appendChild(item)
        
    }
}

const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

initGame()