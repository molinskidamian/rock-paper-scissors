const form = document.querySelector('#gestures');
const labels = form.querySelectorAll('label');
const images = form.querySelectorAll('img');
const btnStart = form.querySelector('button');
let yourChoose;
let computerChoose;

images.forEach((el, index) => {
  el.addEventListener('click', () => {
    yourChoose = index;
    console.log(`My choose: ${yourChoose}`);
  });
});

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

function result(player, computer) {
  if (player === computer) {
    console.log('remis!');
  } else if (player === 0 && computer === 1) {
    console.log('przegrałeś');
  } else if (player === 0 && computer === 2) {
    console.log('wygrałeś');
  } else if (player === 1 && computer === 0) {
    console.log('wygrałeś');
  } else if (player === 1 && computer === 2) {
    console.log('przegrałeś');
  } else if (player === 2 && computer === 0) {
    console.log('przegrałeś');
  } else if (player === 2 && computer === 1) {
    console.log('wygrałeś');
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
  result(yourChoose, computerChoose);
}

btnStart.addEventListener('click', play);
