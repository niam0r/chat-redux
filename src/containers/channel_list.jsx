import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions/index';

class ChannelList extends Component {
  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(channel => {
            return <li>#{channel}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
