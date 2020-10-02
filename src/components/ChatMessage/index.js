import React from "react";
import { auth } from "../../App";
import "./ChatMessage.css";

const ChatMessage = ({ message }) => {
  const { text, uid, photoUrl } = message;

  const messageClass = uid === auth.currentUser.uid ? "Sent" : "Received";
  return (
    <div className={`message${messageClass}`}>
      <img src={photoUrl} alt="users avatar" className="avatarImage" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
