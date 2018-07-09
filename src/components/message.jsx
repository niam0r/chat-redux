import React from 'react';

const Message = (props) => {
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <p>{author} - {time}</p>
      <p>content}</p>
    </div>
  );
};

export default Message;
