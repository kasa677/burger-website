import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Nav from './Component/Nav';
import About from './Pages/About';
import Feauter from './Pages/Feauter';
import Chef from './Pages/Chef';
import Menu from './Pages/Menu';
import Booking from "./Pages/Booking"
import Contact from "./Pages/Contact"
import Team from './Pages/Team';
import Cocktail from './Pages/Cocktail';
import Home from './Pages/Home';
import Cockform from './Pages/Cockform';
import Burge from './Pages/Burge';
import Burform from './Pages/Burform';
import Snacks from './Pages/Snacks';
import Snaform from './Pages/Snaform';

function App() {
  return (
  <>
  <Nav/>
   
     <Routes>
      <Route path='burge' element={<Burge></Burge>}/>
      <Route path='cock' element={<Cockform/>}/>
      <Route path='snac' element={<Snaform/>}/>
     <Route path="/" element={<Home/>}/>
      <Route path='cocktail' element={<Cocktail/>}/>
      <Route path="bur" element={<Burform/>}/>
      <Route path="snacks" element={<Snacks/>}/>

  
      <Route path="about" element={<About/>}/>
      <Route path="feature" element={<Feauter/>}/>
      <Route path="chef" element={<Chef/>}/>
      <Route path="team" element={<Team/>}/>
      
      <Route path="menu" element={<Menu/>}/>
      <Route path="booking" element={<Booking/>}/>
      <Route path="contact" element={<Contact/>}/>
     </Routes>

      
  </>
  );
}

export default App;
