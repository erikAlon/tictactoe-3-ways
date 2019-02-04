import React from 'react';
import Cell from './Cell';
import Endgame from './Endgame';
import './Board.css';
import { Table } from 'reactstrap';

const HU_PLAYER = '🌞';
const AI_PLAYER = '🌘';
const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      origBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      currentPlayer: HU_PLAYER,
      game: false,
    };
  }

  boardClick = (e) => {
    const { id, attributes } = e.currentTarget;
    const { origBoard, currentPlayer } = this.state;

    if (attributes[1].value === 'true') {
      // Alternate player
      if (currentPlayer === HU_PLAYER) {
        this.setState({
          currentPlayer: AI_PLAYER,
        });
      }
      if (currentPlayer === AI_PLAYER) {
        this.setState({
          currentPlayer: HU_PLAYER,
        });
      }

      // Update board
      let array = origBoard;
      array[id] = currentPlayer;
      this.setState({
        origBoard: array,
      });
      e.currentTarget.setAttribute('value', false);

      // Bug, better with redux because I'm not sticking to convention and I'm updating a components state based off an attribute inside the element in question!
      // I can fire an action once and update the game's state to render the player marking and board score all at once.
      console.log('Bug: clicking on table border throws marking off ', origBoard);

      // Checks for win
      this.checkWin();
    }
  };

  checkWin = () => {
    const { origBoard } = this.state;

    WIN_COMBOS.forEach((arr) => {
      if (
        origBoard[arr[0]] === HU_PLAYER &&
        origBoard[arr[1]] === HU_PLAYER &&
        origBoard[arr[2]] === HU_PLAYER
      ) {
        this.setState({
          currentPlayer: HU_PLAYER,
          game: true,
        });
        console.log('HU wins.. ', this.state);
      }

      if (
        origBoard[arr[0]] === AI_PLAYER &&
        origBoard[arr[1]] === AI_PLAYER &&
        origBoard[arr[2]] === AI_PLAYER
      ) {
        this.setState({
          currentPlayer: AI_PLAYER,
          game: true,
        });
        console.log('AI wins.. ', this.state);
      }
    });
  };

  gameReset = () => {
    this.setState({
      origBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      currentPlayer: HU_PLAYER,
      game: false,
    });
  };

  render() {
    return (
      <div className="board board--view">
        {this.state.game ? (
          <Endgame winner={this.state.currentPlayer} gameReset={this.gameReset} />
        ) : null}

        <Table className="board__table1">
          <tbody>
            <tr>
              <td onClick={this.boardClick} id={0} value={true}>
                <Cell game={this.state.game} player={this.state.currentPlayer} />
              </td>
              <td onClick={this.boardClick} id={1} value={true}>
                <Cell game={this.state.game} player={this.state.currentPlayer} />
              </td>
              <td onClick={this.boardClick} id={2} value={true}>
                <Cell
                  game={this.state.game}
                  player={this.state.game ? '' : this.state.currentPlayer}
                />
              </td>
            </tr>
            <tr>
              <td onClick={this.boardClick} id={3} value={true}>
                <Cell game={this.state.game} player={this.state.currentPlayer} />
              </td>
              <td onClick={this.boardClick} id={4} value={true}>
                <Cell game={this.state.game} player={this.state.currentPlayer} />
              </td>
              <td onClick={this.boardClick} id={5} value={true}>
                <Cell game={this.state.game} player={this.state.currentPlayer} />
              </td>
            </tr>
            <tr>
              <td onClick={this.boardClick} id={6} value={true}>
                <Cell game={this.state.game} player={this.state.currentPlayer} />
              </td>
              <td onClick={this.boardClick} id={7} value={true}>
                <Cell game={this.state.game} player={this.state.currentPlayer} />
              </td>
              <td onClick={this.boardClick} id={8} value={true}>
                <Cell game={this.state.game} player={this.state.currentPlayer} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
