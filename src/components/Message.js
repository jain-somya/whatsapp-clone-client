import React from "react";
import './Chat.css'

function Message({ message }) {
  return (
    <p
      className={`chat__message ${
        message.received ? "":" chat__messageReceived" 
      }`}
    >
      <span className="chat__name">{message?.name}</span>
      {message?.message}
      <span className="chat__timestamp">{message?.timestamp}</span>
    </p>
  );
}

export default Message;
