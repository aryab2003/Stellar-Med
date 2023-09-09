import React from 'react'
import Navbarhome from './Navbarhome'
import Home from './Home'
import Team from './Team'
import Diagnose from './Diagnose'
import Footer from './Footer'
// import Appointment from './Appointment'

export default function Landingpage() {
  return (
    <div>
       <Navbarhome/>
          <Home/>
          <Team/>
          <Diagnose/>
          {/* <Appointment/> */}
          <Footer/>
    </div>
  )
}
