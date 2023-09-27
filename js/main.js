let btnOne = document.querySelector('.btn__rock');
let btnTwo = document.querySelector('.btn__paper');
let btnThree = document.querySelector('.btn__scissor');

let user = document.querySelector('.footer__inner-user');
let computer = document.querySelector('.footer__inner-computer');

let countOne = document.querySelector('.count__One');
let countTwo = document.querySelector('.count__Two');

let win = document.querySelector('.text__win');
let lost = document.querySelector('.text__bad-luck');
let again = document.querySelector('.btn__try-again');

let inner = document.querySelector('.footer__inner');
let choose = document.querySelector('.btn__choose');
let header = document.querySelector('.header');

let counterUser = 0;
let counterComputer = 0;




function rock() {
    let arr = ['Камень', 'Ножницы', 'Бумага'];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let word = arr[randomIndex];
    for (let i = 0; i < 1; i++) {
        if ((counterUser == 5 || counterComputer == 5) && (counterUser > counterComputer)) {
            inner.classList.add('game__over');
            choose.classList.add('game__over');
            header.classList.add('game__over');
            win.classList.add('text__true');
            again.classList.add('btn__try-again--active');
            break;
        } else if ((counterUser == 5 || counterComputer == 5) && (counterUser < counterComputer)) {
            inner.classList.add('game__over');
            choose.classList.add('game__over');
            header.classList.add('game__over');
            lost.classList.add('text__true');
            again.classList.add('btn__try-again--active');
            break;
        } else if (word == 'Камень') {
            countOne.textContent = counterUser;
            countTwo.textContent = counterComputer;
            console.log(word);
        } else if (word == 'Бумага') {
            counterComputer += 1;
            countTwo.textContent = counterComputer;
            console.log(word);
        } else if (word == 'Ножницы') {
            counterUser += 1;
            countOne.textContent = counterUser;
            console.log(word);
        }
    }

}

function paper() {
    let arr = ['Камень', 'Ножницы', 'Бумага'];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let word = arr[randomIndex];
    for (let i = 0; i < 1; i++) {
        if ((counterUser == 5 || counterComputer == 5) && (counterUser > counterComputer)) {
            inner.classList.add('game__over');
            choose.classList.add('game__over');
            header.classList.add('game__over');
            win.classList.add('text__true');
            again.classList.add('btn__try-again--active');
            break;
        } else if ((counterUser == 5 || counterComputer == 5) && (counterUser < counterComputer)) {
            inner.classList.add('game__over');
            choose.classList.add('game__over');
            header.classList.add('game__over');
            lost.classList.add('text__true');
            again.classList.add('btn__try-again--active');
            break;
        } else if (word == 'Бумага') {
            countOne.textContent = counterUser;
            countTwo.textContent = counterComputer;
            console.log(word);
        } else if (word == 'Ножницы') {
            counterComputer += 1;
            countTwo.textContent = counterComputer;
            console.log(word);
        } else if (word == 'Камень') {
            counterUser += 1;
            countOne.textContent = counterUser;
            console.log(word);
        }
    }
}

function scissor() {
    let arr = ['Камень', 'Ножницы', 'Бумага'];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let word = arr[randomIndex];
    for (let i = 0; i < 1; i++) {
        if ((counterUser == 5 || counterComputer == 5) && (counterUser > counterComputer)) {
            inner.classList.add('game__over');
            choose.classList.add('game__over');
            header.classList.add('game__over');
            win.classList.add('text__true');
            again.classList.add('btn__try-again--active');
            break;
        } else if ((counterUser == 5 || counterComputer == 5) && (counterUser < counterComputer)) {
            inner.classList.add('game__over');
            choose.classList.add('game__over');
            header.classList.add('game__over');
            lost.classList.add('text__true');
            again.classList.add('btn__try-again--active');
            break;
        } else if (word == 'Ножницы') {
            countOne.textContent = counterUser;
            countTwo.textContent = counterComputer;
            console.log(word);
        } else if (word == 'Камень') {
            counterComputer += 1;
            countTwo.textContent = counterComputer;
            console.log(word);
        } else if (word == 'Бумага') {
            counterUser += 1;
            countOne.textContent = counterUser;
            console.log(word);
        }
    }
}

function remove() {
    inner.classList.remove('game__over');
    choose.classList.remove('game__over');
    header.classList.remove('game__over');
    win.classList.remove('text__true');
    lost.classList.remove('text__true');
    again.classList.remove('btn__try-again--active');
    counterUser = 0;
    counterComputer = 0;
}

btnOne.addEventListener('click', rock);
btnTwo.addEventListener('click', paper);
btnThree.addEventListener('click', scissor);
again.addEventListener('click', remove);












