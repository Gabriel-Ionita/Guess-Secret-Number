'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//--------Event Listener--------
/*
document.querySelector works like a function 
const x = function(){
    console.log(23)
} 
*/
//1. aici se creaza variabila care ne da un numar random de ghicit
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//3. variabila care da valoare clasei .score din DOM html
let score = 20;

let highscore = 0;

// evenimentul la click  + functie care transforma valoare input intrun numar
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // daca valoarea introdusa nu este un numar !guess = no number!
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    //2. aceasta linie ne afiseaza din constanta secretNumber numarul random generat prin Math.trunc(Math.(random))
    document.querySelector('.number').textContent = secretNumber;

    // styles in DOM aceste styluri vor fi aplicate doar
    //daca declaratia else if este true.
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong//Refactored code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too  high!' : 'Too low!';
      //score scade cu -1 cand numarul este Too high
      score--;
      //.score preia valoarea actualizata 'let score' si o afiseaza in DOM
      document.querySelector('.score').textContent = score;
    }
    //cand score < 1 va rula else
    else {
      document.querySelector('.message').textContent = 'You lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  //When number is to high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too  high!';
      //score scade cu -1 cand numarul este Too high
      score--;
      //.score preia valoarea actualizata 'let score' si o afiseaza in DOM
      document.querySelector('.score').textContent = score;
    }
    //cand score < 1 va rula else
    else {
      document.querySelector('.message').textContent = 'You lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }

    //when number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      //score scade cu -1 cand numarul este Too low
      score--;
      //.score preia valoarea actualizata 'let score' si o afiseaza in DOM
      document.querySelector('.score').textContent = score;
    }
    //cand score < 1 va rula else
    else {
      document.querySelector('.message').textContent = 'You lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

//-------- Chalenge ---------
//restore initial page on click AGAIN
//anonimus function
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
