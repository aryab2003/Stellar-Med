// Doctorinput.js

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../../../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";

export default function Doctorinput(props) {
  const [message, setMessage] = useState("");
  const messageRef = props.data;
  const location = useLocation();
  const email = location.state ? location.state.token : null;

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    const { uid } = auth.currentUser;
    const newMessage = {
      text: message,
      name: email,
      createdAt: serverTimestamp(),
      uid,
    };
    await addDoc(messageRef, newMessage);
    setMessage(""); // Clear the input field
    // Call the callback to update the messages state in Doctorchat
    props.updateMessages(newMessage);
  };

  return (
    <div>
      <form className="send-message" onSubmit={sendMessage}>
        <label htmlFor="messageInput" hidden>
          Enter Message
        </label>
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

