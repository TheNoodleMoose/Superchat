import React, { useState } from "react";
import firebase from "firebase";
import { firestore, auth } from "../../App";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage";
const ChatRoom = () => {
  const [formValue, setFormValue] = useState("");
  const messageRef = firestore.collection("message");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoUrl: photoURL
    });

    setFormValue("");
  };
  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">
          <span role="img" aria-label="send button">
            ⚡
          </span>
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
