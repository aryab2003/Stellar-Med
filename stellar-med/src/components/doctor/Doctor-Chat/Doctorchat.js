// Doctorchat.js

import React, { useState, useEffect, useRef } from "react";
import Doctorinput from "./Doctorinput";
import { doc, collection, getDocs, query, orderBy} from "firebase/firestore";
import { db, auth } from "../../../firebase";

export default function Doctorchat(props) {
  const [messages, setMessages] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const messageFlagRef = useRef(null);

  useEffect(() => {
    // Function to fetch messages
    const fetchMessages = async () => {
      try {
        const patientId = props.data;
        const patientRef = doc(db, "Patient", patientId);
        const messageRef = collection(patientRef, "Messages");
        messageFlagRef.current = messageRef; // Store the value in the ref

        // Create a query for messages, ordered by createdAt, limited to a certain number
        const q = query(messageRef, orderBy("createdAt"));

        if (lastVisible) {
          // If there's a lastVisible, start the query after it
          q.startAfter(lastVisible);
          // q = query(q, startAfter(lastVisible));
        }

        const snapshot = await getDocs(q);
        const newMessages = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setMessages((prevMessages) => [...prevMessages, ...newMessages]);

        if (snapshot.docs.length > 0) {
          // Set the lastVisible to the last document in the snapshot
          setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    // Call fetchMessages when the component mounts
    fetchMessages();
  }, [props.data, lastVisible]);

  // Callback function to update the messages state
  const updateMessages = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className=" h-auto w-64 rounded-2xl bg-white opacity-90 p-1">
      <h1 className="bg-sky-300 rounded-xl p-3 mx-2">Chat Messages</h1>
      <div className="overflow-auto hover:overflow-scroll h-64">
      <ul className="">
        {messages.map((msg) =>
          msg.uid === auth.currentUser.uid ? (
            <li className="text-blue-800 flex justify-end p-3" key={msg.id}>
              {msg.text}
            </li>
          ) : (
            <li className="text-black-800" key={msg.id}>
              {msg.text}
            </li>
          )
        )}
      </ul>
      </div>
      <Doctorinput data={messageFlagRef.current} updateMessages={updateMessages} />
    </div>
  );
}
