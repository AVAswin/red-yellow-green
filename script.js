
let titleDiv = document.getElementById('title');

let message = 'Square Color Counter 🚀';

titleDiv.innerText = message;
titleDiv.innerHTML = `<h1>${message}</h1>`; 

const squares = document.querySelectorAll('.colorSquare');

//forEach()
const timesClicked = {red: 0, yellow: 0, green: 0};
squares.forEach(square => {
    square.onclick = () => {
      timesClicked[square.value] += 1;
      square.innerText = timesClicked[square.value];
    }
  });
//   squares[0].value = red;
//   squares[1].value = yellow;
//   squares[2].value = green;

  function clearScores() {
    timesClicked.red = 0;
    timesClicked.yellow = 0;
    timesClicked.green = 0;
    squares.forEach(square => {
      square.innerText = '';
    });
  }

const clearGameBtn = document.getElementById('clear-game');
clearGameBtn.onclick = () => clearScores();


