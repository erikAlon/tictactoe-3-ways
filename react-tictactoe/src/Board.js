import React from 'react';
import Cell from './Cell';
// import Endgame from './Endgame';
import './Board.css';
import { Table } from 'reactstrap';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      origBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      winCombos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
      ],
      currentPlayer: '',
      huPlayer: 'o',
      aiPlayer: 'x',
    };

    this.boxClick = this.boxClick.bind(this);
  }

  boxClick = () => {};

  render() {
    return (
      <div className="board board--view">
        <Table className="board__table1">
          <tbody>
            <tr>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
            </tr>
            <tr>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
            </tr>
            <tr>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
              <td>
                <Cell player={this.state.currentPlayer} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
