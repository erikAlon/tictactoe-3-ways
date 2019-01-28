var GAME = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var PLAYER_1 = '1';
var PLAYER_2 = '2';

function startG() {
  // win conditions
  let wins = {
    diaR: [0, 4, 8],
    diaL: [2, 5, 6],
    upL: [0, 3, 6],
    upM: [1, 3, 7],
    upR: [2, 5, 8],
  };
  let winner;
  let plays = 0;

  // loop to keep game running
  while (plays < 9 || !winner) {
    // loop to check win condition
    Object.keys(wins).forEach((element) => {
      if (GAME[wins.element[0]] === GAME[wins.element[1] === GAME[wins.element[2]]]) {
        winner = wins.element[0];
      }
    });

    plays++;
  }

  // alert box with game status and rematch button
}

startG();
