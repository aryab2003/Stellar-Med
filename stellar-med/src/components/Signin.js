import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.js';
import { db } from '../firebase.js';
import { collection ,getDocs} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import background from "../goodbg.jpg";

export default function Signin() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) =>{
    setSelectedOption(event.target.value);
    console.log(event.target.value)
  }
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const checkDoc = async (email) => {
    const doctorsRef = collection(db, "Doctor");
    const snapshot = await getDocs(doctorsRef);
    const doctors = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
    return doctors.some((doctor) => doctor.email === email);
  };

  var patientId;
  const checkPatient = async (email) => {
    const patientsRef = collection(db, "Patient");
    const snapshot = await getDocs(patientsRef);
    const patients = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    
    const patient=  patients.find((patient) => patient.email === email);
    if (patient){
      patientId = patient.id;
      return true;
    }
    else{
      return false;
    }


  };






  const signin=async(e)=>{
    e.preventDefault();
    if(selectedOption===''){alert("check an option")}
    else if(selectedOption==='Doctor'){
      if(await checkDoc(email)===true){
          signInWithEmailAndPassword(auth,email,password)
          .then((userCredential)=>{
          navigate(`/Doctordashboard`,{state:{token:email}})
        }).catch((error)=>{
          console.log(error)
        })
      }
      else{
        alert("No Doctor Registered Under this Email")
      }
    }
    else{
      if(await checkPatient(email)===true){
          signInWithEmailAndPassword(auth,email,password)
          .then((userCredential)=>{
            navigate(`/Patientdashboard?id=${patientId}`)
          }).catch((error)=>{
            console.log(error)
          })

      }
      else if(await checkPatient(email)===false){
        alert("No Patient Registered Under this Email")
      }

    }
  }
  
  let myStyle = {
    backgroundImage: `url(${background})` ,
    height:'100vh',
    backgroundSize: 'cover',
 }

let box = {
  marginRight : '45rem'
}
  
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={myStyle}>
      <div style={box}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm my-10">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
            Sign in to your account
          </h2>
        </div>
        <div className=" justify-center flex  m-auto  ">
        <div className="flex  items-center my-0">
        <input
          id="default-radio-1"
          type="radio"
          value="Doctor"
          onChange={handleRadioChange}
          checked={selectedOption==='Doctor'}
          className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          <img
        className="h-20 w-full rounded-lg object-cover object-center"
        src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
        alt="nature"
      />
        </label>
      </div>
      <div className="flex items-center mx-5">
        <input
          id="default-radio-2"
          type="radio"
          value="Patient"
          onChange={handleRadioChange}
          checked={selectedOption==='Patient'}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
        />
        <label
          htmlFor="default-radio-2"
          className="ml-2 text-sm font-medium text-gray-900"
        >
           <img
        className="h-20 w-full rounded-lg object-cover object-center"
        src="https://cdn-icons-png.flaticon.com/512/2854/2854581.png"
        alt="nature"
      />
        </label>
        </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signin}>
            <div>
              <label htmlFor="email" className="block text-m font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value = {email}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-m font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="https://portfolio-nextjs-prisma.vercel.app/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                Sign in
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  )
}
