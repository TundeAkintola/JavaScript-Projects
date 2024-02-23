'use strict';

const check = document.querySelector('.check');
const again = document.querySelector('.again');
let secretNumber = Math.floor(Math.random() * 10) + 1;

// console.log((document.querySelector('.number').textContent = secretNumber));

let score = 10;
let highscore = 0;
let guess = Number(document.querySelector('.guess').value);

function guessChecker() {
  const guess = Number(document.querySelector('.guess').value);
  // if there is no input
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '⛔ No Number!')
    );

    document.querySelector('.screen').style.backgroundColor = '#ff010b';
  }
  // Game over
  else if (score < 1) {
    document.querySelector('.message').textContent = `Game Over 😂, Press
    'Again'
    Button`;
  }
  // if the guessed number matches the secretNumber
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    score++;

  document.querySelector('.number').textContent = secretNumber;
 document.querySelector('.score').textContent = score;
    document.querySelector('.screen').style.backgroundColor = '#108010';
    // after 20 points the highscore increases by 1
    if (guess > highscore) {
      highscore++;
      document.querySelector('.highscore').textContent = score;
    }
  }
  // // if the guess is greater than the secretNumber or greater than 20
  else if (guess > secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `❌ Wrong! Too High!, Choose from 1-10`;
    score--;
    document.querySelector('.score').textContent = score;

    document.querySelector('.screen').style.backgroundColor = '#e6080e';
  }

  //if the guessed number is less than the secretNumber
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = ` ❌ Wrong ,Too Low!`;
    score--;
    document.querySelector('.score').textContent = score;

    document.querySelector('.screen').style.backgroundColor = '#e6080e';
  }
}

function reset() {

secretNumber = Math.floor(Math.random() * 10) + 1;

document.querySelector('.number').textContent = '?';
  document.querySelector('.screen').style.backgroundColor = '#03e708';
 
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = '0';
}

function listeners() {
  check.addEventListener('click', guessChecker);
  again.addEventListener('click', reset);
}

listeners();
 
