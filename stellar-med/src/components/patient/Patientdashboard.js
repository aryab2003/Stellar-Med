import { Fragment, useState } from "react";
import Navbar from "./Navbar";
import Patientchat from "./Patient-Chat/Patientchat";
import { useLocation } from "react-router-dom";
import Patientreminder from "./Patientreminder";
import { Link } from "react-router-dom";
import Report from "../reports/Report";


export default function Patientdashboard() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(!showChat);
  };
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  let myStyles = {
    backgroundImage: `url("https://img.freepik.com/free-photo/blur-hospital_1203-7969.jpg?w=1060&t=st=1693410891~exp=1693411491~hmac=44ad241149d6f75c6bd61a3448eaae807f39a7a747b38373c6df95f641e5eadf")`,
    height: "91vh",
    backgroundSize: "cover",
  };

  return (
    <>
      <Navbar />
      <div className="min-h-full overflow-hidden" style={myStyles} >
        <header className="">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="container h-screen w-3/4 bg-slate-100 opacity-90 mx-auto flex flex-row rounded-xl">
               <div className="container  h-screen w-64 flex flex-col  ">
                      <div className="container bg-slate-200 h-64 m-3 rounded-xl flex justify-center items-center">
                      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-48">
                            <img src="https://lordicon.com/icons/wired/gradient/1249-heart-beat.svg" alt="" className="h-36 w-36"/>
                            <Link id="heartbeat" to="https://app.hyperate.io/74B6">Monitor Heart Rate</Link>
                      </button>
 
                      </div>
                      <div className="container bg-slate-400 h-1/2 m-3 rounded-xl">
                            
                            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                 <Patientreminder data={id} />
                            </div>
                      </div>
               </div>
               <div className="container bg-slate-300 h-3/4 w-3/4 mx-8 my-5 rounded-xl">
                <div className="container mx-3 my-3">
               <Report data={id}/>
               </div>
               </div>
          </div>


        </main>
      </div>
      <div className="fixed bottom-10 left-10">
        <button
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center sticky"
          style={{ bottom: showChat ? "10px" : "initial" }} // Add this style
          onClick={handleClick}
        >
          <img
            className="h-15 w-15 rounded-full object-cover object-center sticky"
            src="https://static-00.iconduck.com/assets.00/chat-icon-512x512-nre05atn.png"
            alt="Chat with us"
          />
        </button>
        {showChat && <Patientchat data={id} />}
      </div>
    </>
  );
}
