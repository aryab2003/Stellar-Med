import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Doctorchat from "./Doctor-Chat/Doctorchat";
import { Link } from "react-router-dom";

export default function Patientinfo() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(!showChat);
  };

  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  let myStyles = {
    backgroundImage: `url("https://img.freepik.com/premium-photo/blurry-office-interior_103324-720.jpg")` ,
    height:'100vh',
    backgroundSize: 'cover',
   }

  return (
    <>
    <div className="wrapper flex justify-center items-center" style={myStyles}>
      {/* <div className="container h-5/6 w-3/4 bg-white opacity-80 mx-1 ">
        <div className="container h-1/2 w-full flex flex-row ">
             <div className="container h-full w-2/5 bg-slate-500 flex jusify-center items-center">
             <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-48">
                   <img src="https://lordicon.com/icons/wired/gradient/1249-heart-beat.svg" alt="" className="h-36 w-36"/>
                   <Link id="heartbeat" to="https://app.hyperate.io/74B6">Monitor Heart Rate</Link>
              </button>
             </div>
             <div className="container h-full w-3/5 bg-slate-300 "></div>
        </div>
         <div className="container h-1/2 w-full bg-slate-400 ">
            
         </div> */}
         <div className="container h-5/6 w-3/4 bg-white opacity-90 mx-auto flex flex-row rounded-xl">
               <div className="container  h-screen w-64 flex flex-col  ">
                      <div className="container bg-slate-400 h-64 m-3 rounded-xl flex justify-center items-center">
                        <div >
                            <h1 className="text-2xl font-mono" >Medical Report</h1>
                            <div class="flex -space-x-1 overflow-hidden my-3 ml-3">
                            <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white" src="https://cdn-icons-png.flaticon.com/512/2854/2854581.png" alt=""/>
                            </div>
                            <div className="font-mono">
                            <h1 >Patient Name : P1</h1>
                            <h1>Age : 18 </h1>
                            <h1>Sex : nhi mila</h1>
                            </div>
                        </div>

                      </div>
                      <div className="container bg-slate-200 h-2/5 m-3 rounded-xl flex justify-center items-center">
                      <button class="bg-transparent hover:bg-blue-200 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-48">
                            <img src="https://lordicon.com/icons/wired/gradient/1249-heart-beat.svg" alt="" className="h-36 w-36"/>
                            <Link id="heartbeat" to="https://app.hyperate.io/74B6">Monitor Heart Rate</Link>
                      </button>
                      </div>
               </div>
               <div className="container bg-slate-300 h-5/6 w-3/4 mx-8 my-5 rounded-xl">

               </div>
          </div>
      </div>
      {/* <>
      <Link to ="https://app.hyperate.io/74B6">Monitor Heart Rate</Link>
      </> */}
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
