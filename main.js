
// const grid = document.getElementsByClassName('grid');

document.addEventListener('DOMContentLoaded', () => {
    debugger;
const square = document.querySelectorAll('.square')
const minion = document.querySelectorAll('.minion')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime=timeleft.textContent;

function randomSquare() {
    
    square.forEach(className => {
        className.classList.remove('minion')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('minion')
    hitPosition = randomPosition.id;

}

    

    square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result++;
            score.textContent = result
        }
    })
})

function moveMinion() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}
moveMinion();
function countDown() {
    currentTime--;
    timeleft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(timerId)
        location.reload();  

        alert('GAME OVER! your Final Score is ' + result);
      }
}
let timerId = setInterval(countDown, 1000)
})
