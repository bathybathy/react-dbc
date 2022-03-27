// import Lista from './components/lista'
// import {useState} from 'react'
// import SeuNome from './components/seuNome'
// import Saudacao from './components/saudacao'

import React from 'react'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Inicial from './pages/Inicial'
import Header from './components/Header'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
 
 
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
