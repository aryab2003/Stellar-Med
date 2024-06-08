import React from 'react'
import Navbarhome from './Navbarhome'
import Home from './Home'
import Team from './Team'
import Diagnose from './Diagnose'


export default function Landingpage() {
  return (
    <div>
       <Navbarhome/>
          <Home/>
          <Team/>
          <Diagnose/>
    </div>
  )
}
