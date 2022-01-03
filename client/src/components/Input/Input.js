import React from "react";
import "./Input.css";

const Input = ({ sendMessage, message, handleChange, handleKeyPress }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
