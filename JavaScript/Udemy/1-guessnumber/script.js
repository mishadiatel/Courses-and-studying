'use strict';

let checkButton = document.querySelector('.check');
let inputNumber = document.querySelector('.guess');
let message = document.querySelector('.message');
let scoreField = document.querySelector('.score');
let numberField = document.querySelector('.number');
let body = document.querySelector('body');
let highScoreField = document.querySelector('.highscore');
let againButton = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
numberField.textContent = '?';

checkButton.addEventListener('click', function () {
  let guess = Number(inputNumber.value);
  if (!guess) {
    message.textContent = 'No Number';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number';
    body.style.backgroundColor = '#60b347';
    numberField.style.width = '30rem';
    numberField.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreField.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high';
      score--;
      scoreField.textContent = score;
      score;
    } else {
      message.textContent = 'You lost the game';
      scoreField.textContent = '0';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low';
      score--;
      scoreField.textContent = score;
      score;
    } else {
      message.textContent = 'You lost the game';
      scoreField.textContent = '0';
    }
  }
});
againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoreField.textContent = score;
  numberField.textContent = '?';
  inputNumber.value = '';
  body.style.backgroundColor = '#222';
  numberField.style.width = '15rem';
});
