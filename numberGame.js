let randomNo = Math.floor(Math.random() * 100) + 1;

const guess = document.querySelector('.guess');
const submit = document.querySelector('.submit');

const prev = document.querySelector('.prev');
const currValue = document.querySelector('.currValue');
const LorH = document.querySelector('.LorH');

let count = 1;
let resetBtn;

function check() {
    let userNo = Number(guess.value);
    if(count === 1) {
        prev.textContent = 'Previous Guesses: ';
    }

    prev.textContent = prev.textContent + userNo + ' ';

    if(userNo === randomNo) {
        currValue.textContent = 'You got it right!🎉';
        currValue.style.backgroundColor = 'green';
        LorH.textContent = '';
        gameOver();
    }
    else if(count === 8) {
        currValue.textContent = '⚠⚠Game Over⚠⚠';
        LorH.textContent = '';
        gameOver();
    }
    else {
        currValue.textContent = 'Wrong!';
        currValue.style.backgroundColor = 'red';
        if(userNo < randomNo) {
            LorH.textContent = 'Try a higher value';
        }
        else if(userNo > randomNo) {
            LorH.textContent = 'Try a lower value';
        }
    }

    count++;
    guess.value = '';
    guess.focus();
}
submit.addEventListener('click', check);

function gameOver() {
    guess.disabled = true;
    submit.disabled = true;
    resetBtn = document.createElement('button');
    resetBtn.textContent = 'Play Again';
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
    count = 1;

    const resetResult = document.querySelectorAll('.result p');
    for(const resetPara of resetResult) {
        resetPara.textContent = '';
    }

    resetBtn.parentNode.removeChild(resetBtn);

    guess.disabled = false;
    submit.disabled = false;
    guess.value = '';
    guess.focus();

    currValue.style.backgroundColor = '';

    randomNo = Math.floor(Math.random() * 100) + 1;
}