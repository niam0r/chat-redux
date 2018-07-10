import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleSubmit = () => {
    this.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          type="text"
          className="form-control"
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapStateToProps (state) {
  return {
    channels: state.channels,
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps (dispatch) {
  // body...
}


export default MessageForm;
