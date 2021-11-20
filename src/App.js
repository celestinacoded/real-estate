import React from 'react'
import Agentss  from "./Components/Agentss/Agentes";
// import Main from './Components/Auth/main';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header'
import Property2 from './Components/PropertyInfor/Property2';
import SamHomePage from './Components/SamHomePage/SamHome';
import TaibatHomePage from './Components/TaibatHomePage/TiabaaatHome.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TobiDetails from "./Components/TobiDetails/HomeDetail";
// import TinaDetail from "./Components/TinaDetail/LandingPage";
import SamProps from "./Components/SamProps/Properties";
import PropsNg from './Components/PropsNg.js/AbujaProps';

const App = () => {
  return (
    <div>
      
    
    <Router>
    <Header/>
    <SamHomePage/>
    <SamProps/>
    <PropsNg/>
      <TaibatHomePage/>
      <Property2/> 
     <Agentss/>
     {/* <Main/> */}
    
     <Footer/> 
    <Routes> 
    <Route exact path="/tobidetails" element={<TobiDetails/>}/>
    {/* <Route exact path="/t" element={<TinaDetail/>}/> */}
    </Routes>
    </Router>
    </div>
  );
}

export default App
