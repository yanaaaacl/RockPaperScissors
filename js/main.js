
function getComputerChoice() {
    let arrPlay = [];
    for (let i = 0; i < 5; i++) {
        let arr = ['Камень', 'Ножницы', 'Бумага'];
        let randomIndex = Math.floor(Math.random() * arr.length);
        arrPlay.push(arr[randomIndex]);

    }
    return arrPlay;
};

let getComputerAnswer = getComputerChoice();


// просит у пользователя ввести пять раз слово, потом переписывает это слово в нужный регистр и записывает все эти слова в массив arrwords



function time() {
    let arrWords = [];
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Введите камень, ножницы или бумага:');
        let result = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        arrWords.push(result);
    }
    return arrWords;
}

let times = time();



function roundGame(times, getComputerAnswer) {
    let counterUser = 0;
let counterComputer = 0;
    for (let i = 0; i < 5; i++) {
        let elem = times[i];
        let elemTwo = getComputerAnswer[i];
        for (let j = 0; j < 1; j++) {


            if ((elem == 'Бумага') && (elemTwo == 'Камень')) {
                console.log(elemTwo, ' - Ход компьютера');
                console.log(elem, ' - Ваш ход');
                counterUser += 1;
                console.log('Счет: ' + counterComputer + ' : ' + counterUser);
                console.log ('Вы выиграли в этом раунде! Бумага бьет камень');
            } else if ((elem == 'Камень') && (elemTwo == 'Бумага')) {
                console.log(elemTwo, ' - Ход компьютера');
                console.log(elem, ' - Ваш ход');
                counterComputer += 1;
                console.log('Счет: ' + counterComputer + ' : ' + counterUser);
                console.log('Вы проиграли в этом раунде! Бумага бьет камень');
            } else if ((elem == 'Ножницы') && (elemTwo == 'Бумага')) {
                console.log(elemTwo, ' - Ход компьютера');
                console.log(elem, ' - Ваш ход');
                counterUser += 1;
                console.log('Счет: ' + counterComputer + ' : ' + counterUser);
                console.log ('Вы выиграли в этом раунде! Бумагу режут ножницы');

            } else if ((elem == 'Бумага') && (elemTwo == 'Ножницы')) {
                console.log(elemTwo, ' - Ход компьютера');
                console.log(elem, ' - Ваш ход');
                counterComputer += 1;
                console.log('Счет: ' + counterComputer + ' : ' + counterUser);
                console.log ('Вы проиграли в этом раунде! Бумагу режут ножницы');

            } else if ((elem == 'Камень') && (elemTwo == 'Ножницы')) {
                console.log(elemTwo, ' - Ход компьютера');
                console.log(elem, ' - Ваш ход');
                counterUser += 1;
                console.log('Счет: ' + counterComputer + ' : ' + counterUser);
                console.log ('Вы выиграли в этом раунде! Камень точет ножницы');

            } else if ((elem == 'Ножницы') && (elemTwo == 'Камень')) {
                console.log(elemTwo, ' - Ход компьютера');
                console.log(elem, ' - Ваш ход');
                counterComputer += 1;
                console.log('Счет: ' + counterComputer + ' : ' + counterUser);
                console.log ('Вы проиграли в этом раунде! Камень точет ножницы');

            } else {
                console.log(elemTwo, ' - Ход компьютера');
                console.log(elem, ' - Ваш ход');
                console.log ('Ничья');
            }


        }
    }

    if ((counterComputer > counterUser) && (counterComputer - counterUser < 5)) {
        console.log('Ты проиграл! С перевесом в: ' + (counterComputer - counterUser) + ' балла');
    } else if ((counterComputer > counterUser) && (counterComputer - counterUser == 1)) {
        console.log('Ты проиграл! С перевесом в: ' + (counterComputer - counterUser) + ' балл');
    }else if ((counterUser > counterComputer) && (counterUser - counterComputer < 5)) {
        console.log('Ты победил! С перевесом в: ' + (counterUser - counterComputer) + ' балла');
    }else if ((counterUser > counterComputer) && (counterUser - counterComputer == 1)) {
        console.log('Ты победил! С перевесом в: ' + (counterUser - counterComputer) + ' балл');
    }else{
        console.log('Ничья');
    }
}

roundGame(times, getComputerAnswer);












