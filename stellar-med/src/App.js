import './index.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from './components/Signin';
import Landingpage from './components/Home/Landingpage';

function App() {
  return(
    <div className='App'>
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landingpage/>}/>
        <Route exact path="/Signin" element={<Signin/>}/>
        
      </Routes>
      </BrowserRouter>
      </>
    </div>
  )
}

export default App;
