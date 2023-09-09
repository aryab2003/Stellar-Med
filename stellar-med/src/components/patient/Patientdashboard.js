import { Fragment, useState } from 'react'
import Navbar from './Navbar'
import Patientchat from './Patient-Chat/Patientchat';
import { useLocation } from 'react-router-dom';

export default function Patientdashboard() {
  const [showChat,setShowChat] = useState(false);

  const handleClick =()=>{
    setShowChat(!showChat);
  }
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  let myStyles = {
    backgroundImage: `url("https://img.freepik.com/free-photo/blur-hospital_1203-7969.jpg?w=1060&t=st=1693410891~exp=1693411491~hmac=44ad241149d6f75c6bd61a3448eaae807f39a7a747b38373c6df95f641e5eadf")` ,
    height:'91vh',
    backgroundSize: 'cover',
   }
   
  return (
    
    <>
      <Navbar/>
      <div className="min-h-full" style={myStyles}>
        <header className="">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
      <div className="fixed bottom-10 left-10">
      <button className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center"
      onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <img
      className="h-15 w-15 rounded-full object-cover object-center"
      src="https://static-00.iconduck.com/assets.00/chat-icon-512x512-nre05atn.png"
      alt="Chat with us"
    />
      </button>
      {showChat && <Patientchat data={id}/>}
      </div>


    </>

  )
}
