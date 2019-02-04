import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Endgame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.props.gameReset();
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { modal } = this.state.modal;
    return (
      <Modal isOpen={true}>
        <ModalHeader>GAME!</ModalHeader>
        <ModalBody>The game's winner: {this.props.winner}</ModalBody>
        <ModalFooter>
          <Button onClick={this.props.gameReset}>Reset Game</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Endgame;
