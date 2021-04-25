const form = document.querySelector('#gestures');
const labels = form.querySelectorAll('label');
const images = form.querySelectorAll('img');
const btnStart = form.querySelector('button');
const resultSection = document.querySelector('#result');
let yourChoose;
let computerChoose;
let result;

function detectName(number) {
  switch (number) {
    case 0:
      return 'paper';

    case 1:
      return 'scissors';

    case 2:
      return 'rock';

    default:
      break;
  }
}

images.forEach((el, index) => {
  el.addEventListener('click', () => {
    yourChoose = index;
    console.log(`My choose: ${detectName(yourChoose)}`);
    console.log('-------------------- Let\'s Play!');
  });
});

function rules(player, computer) {
  if (player === computer) {
    console.log('remis!');
    return 1;
  } if (player === 0 && computer === 1) {
    console.log('przegrałeś');
    return 0;
  } if (player === 0 && computer === 2) {
    console.log('wygrałeś');
    return 2;
  } if (player === 1 && computer === 0) {
    console.log('wygrałeś');
    return 2;
  } if (player === 1 && computer === 2) {
    console.log('przegrałeś');
    return 0;
  } if (player === 2 && computer === 0) {
    console.log('przegrałeś');
    return 0;
  } if (player === 2 && computer === 1) {
    console.log('wygrałeś');
    return 2;
  }
}

function showResult(result) {
  if (result === 0) {
    resultSection.removeAttribute('class');
    resultSection.classList.add('result');
    resultSection.classList.add('show-result-red');
    resultSection.textContent = '';
    resultSection.textContent = 'LOSE!';
  } else if (result === 1) {
    resultSection.removeAttribute('class');
    resultSection.classList.add('result');
    resultSection.classList.add('show-result-orange');
    resultSection.textContent = '';
    resultSection.textContent = 'DRAW!';
  } else if (result === 2) {
    resultSection.removeAttribute('class');
    resultSection.classList.add('result');
    resultSection.classList.add('show-result-green');
    resultSection.textContent = '';
    resultSection.textContent = 'WIN!';
  }
}

const random = () => Math.floor(Math.random() * 3);

function play(e) {
  e.preventDefault();

  if (yourChoose === undefined) {
    console.log('Musisz wybrać jeden z trzech gestów!');
  } else {
    console.log(`Wybrałeś: ${detectName(yourChoose)}`);
  }

  computerChoose = random();

  console.log(`Komputer wybrał: ${detectName(computerChoose)}`);
  result = rules(yourChoose, computerChoose);
  console.log(result);
  showResult(result);
}

btnStart.addEventListener('click', play);
