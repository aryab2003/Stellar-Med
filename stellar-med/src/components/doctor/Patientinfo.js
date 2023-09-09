import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Doctorchat from "./Doctor-Chat/Doctorchat";

export default function Patientinfo() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(!showChat);
  };

  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  return (
    <>
      
      <div className="fixed bottom-10 left-10">
        <button
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <img
      className="h-15 w-15 rounded-full object-cover object-center"
      src="https://static-00.iconduck.com/assets.00/chat-icon-512x512-nre05atn.png"
      alt="Chat with us"
    />
        </button>
        {showChat && <Doctorchat data={id}/>}
      </div>
    </>
  );
}
