import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Componants/Home/Home';
import Navbar from './Componants/Navbar/Navbar';
import Footer from './Componants/Footer/Footer';
import './App.css'
import AboutUs from './Componants/AboutUs/AboutUs';
import Contact from './Componants/Contact/Contact';
import SingleVilla from './Componants/Villa/SingleVilla';
import Villas from './Componants/Villa/Villas';
import TermsAndConditions from './Componants/TermsAndConditions/TermsAndConditions';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/villa/:id" element={<SingleVilla />}/>
        <Route path="/villas" element={<Villas />}/>
        <Route path="/termsandconditions" element={<TermsAndConditions />}/>
        

        

      
          
        
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App