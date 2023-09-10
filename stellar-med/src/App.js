import './index.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Patientdashboard from './components/patient/Patientdashboard';
import Signin from './components/Signin';
import Doctordasboard from './components/doctor/Doctordashboard';
import Patientlist from './components/doctor/Patientlist';
import Patientinfo from './components/doctor/Patientinfo';
import Landingpage from './components/Home/Landingpage';



function App() {
  return(
    <div className='App'>
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landingpage/>}/>
        <Route exact path="/Signin" element={<Signin/>}/>
        <Route exact path="/Patientdashboard" element={<Patientdashboard/>}/>
        <Route exact path="/Doctordashboard" element={<Doctordasboard/>}/>
        <Route exact path="/Patientlist" element={<Patientlist/>}/>
        <Route exact path="/Patientinfo" element={<Patientinfo/>}/>

      </Routes>
      </BrowserRouter>
      </>
    </div>
  )
}

export default App;
