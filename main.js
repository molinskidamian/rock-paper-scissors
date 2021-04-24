const form = document.querySelector('#gestures');
const labels = form.querySelectorAll('label');
const images = form.querySelectorAll('img');
const btnStart = form.querySelector('button');
let yourChoose;

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
  // Opracuj zasady gry
  // if(player)
}

const random = () => Math.floor(Math.random() * 3);

function play(e) {
  e.preventDefault();

  if (yourChoose === undefined) {
    console.log('Musisz wybrać jeden z trzech gestów!');
  } else {
    console.log(`Wybrałeś: ${detectName(yourChoose)}`);
  }

  console.log(`Komputer wybrał: ${detectName(random())}`);
}

btnStart.addEventListener('click', play);
