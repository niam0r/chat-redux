import React from 'react';

import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div>
      <img src="https://niam0r.github.io/profile/images/r.jpg" alt="" className="logo"/>
      <p>App</p>
      <ChannelList  />
      <MessageList  />
    </div>
  );
};

export default App;

// channels={this.state.channels}
// messages={this.state.messages}
