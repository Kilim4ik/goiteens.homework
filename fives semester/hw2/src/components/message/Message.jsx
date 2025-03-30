import React from "react";
import "./Message.css";

const Message = ({ text }) => (
  <div className="info-message">
    <p>{text}</p>
  </div>
);

export default Message;
