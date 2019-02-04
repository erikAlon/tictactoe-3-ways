import React from 'react';
import './Cell.css';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.game ? this.props.currentPlayer : '',
      isClicked: false,
    };
    this.boxClick = this.boxClick.bind(this);
  }

  boxClick = (e) => {
    if (this.state.player === '') {
      this.setState({ player: this.props.player, isClicked: true });
    }
  };

  resetBoard = () => {
    this.setState({
      player: '',
    });
  };

  render() {
    return (
      <div className="box" onClick={this.state.isClicked ? null : this.boxClick}>
        {this.state.player}
      </div>
    );
  }
}
