import React from "react";
import { auth } from "../../App";

const ChatMessage = ({ message }) => {
  const { text, uid, photoUrl } = message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoUrl} alt="users avatar" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
