let btnOne = document.querySelector('.btn__rock');
let btnTwo = document.querySelector('.btn__paper');
let btnThree = document.querySelector('.btn__scissor');

let user = document.querySelector('.footer__inner-user');
let computer = document.querySelector('.footer__inner-computer');

let countOne = document.querySelector('.count__One');
let countTwo = document.querySelector('.count__Two');

let counterUser = 0;
let counterComputer = 0;




function rock(){
let arr = ['Камень', 'Ножницы', 'Бумага'];
let randomIndex = Math.floor(Math.random() * arr.length);
let word = arr[randomIndex];
for (let i = 0; i < 1; i++){
    if (counterUser == 5 || counterComputer == 5){
        alert('Game over');
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

function paper(){
    let arr = ['Камень', 'Ножницы', 'Бумага'];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let word = arr[randomIndex];
    for (let i = 0; i < 1; i++){
        if (counterUser == 5 || counterComputer == 5){
            alert('Game over');
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

    function scissor(){
        let arr = ['Камень', 'Ножницы', 'Бумага'];
        let randomIndex = Math.floor(Math.random() * arr.length);
        let word = arr[randomIndex];
        for (let i = 0; i < 1; i++){
            if (counterUser == 5 || counterComputer == 5){
                alert('Game over');
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

btnOne.addEventListener('click', rock);
btnTwo.addEventListener('click', paper);
btnThree.addEventListener('click', scissor);













