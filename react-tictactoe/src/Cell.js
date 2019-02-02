import React from 'react';
import './Cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player ? this.props.player : '',
    };
  }

  render() {
    return (
      <div className="box">
        <div className="marking">{this.state.player}</div>
      </div>
    );
  }
}

export default Cell;