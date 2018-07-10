import React from 'react';

import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img src="https://niam0r.github.io/profile/images/r.jpg" alt="logo" className="messaging-logo"/>
      </div>
        <ChannelList  />
        <MessageList  />
    </div>
  );
};

export default App;
