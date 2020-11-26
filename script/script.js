'use strict';





function guesNumber() {


    let askUser,
        randomNumber,
        userAnswer,
        counter;


    //Переменные которые замыкаются
    randomNumber = Math.floor(Math.random() * 101);
    counter = 9;
    //И даже функция которая замыкается


      askUser = function () {

        userAnswer = prompt('Угадай число от 1 до 100');
        if (userAnswer === null) {
            alert('Игра окончена');
            return;
        }
        userAnswer = +userAnswer;
        if (!isNaN(userAnswer)) {
            if (userAnswer > 100) {
                alert('Вы указали число больше 100 ,попробуйте еще раз');
                askUser();

            } else if (userAnswer < 1) {
                alert('Вы указали число меньше 1 ,попробуйте еще раз');
                askUser();
            }

        } else if (typeof (userAnswer) === 'string') {
            alert('Вы указали не число ,попробуйте еще раз');
            askUser();
            return;

        }



        return userAnswer;

    };
    

    function checkAnswer() {

        let numToCheck = askUser();
        if (numToCheck === undefined) { return; }
        if (counter > 0) {

            if (numToCheck > randomNumber) {
                counter--;
                alert('Загаданное число меньше.У вас осталось: ' + counter + ' попыток');
                checkAnswer();

            } else if (numToCheck < randomNumber) {
                counter--;
                alert('Загаданное число больше.У вас осталось: ' + counter + ' попыток');
                checkAnswer();

            } else if (numToCheck === randomNumber) {

                alert('Поздравляем вы отгадали число .Правильный ответ : ' + numToCheck);

                let askAgain = confirm('Хотите сыграть еще?');
                if (askAgain) {
                    counter = 9;
                    checkAnswer();
                } else {
                    return;
                }
            }

        } else if (counter === 0) {

            alert('Вы исчерпали ваши попытки.Загаданным числом было: ' + randomNumber);
            let askAgain = confirm('Хотите сыграть еще?');
            if (askAgain) {
                counter = 9;
                checkAnswer();
            } else {
                return;
            }

        }



    }



    return checkAnswer;
}

let askUser = guesNumber();

//Запуск  
askUser();