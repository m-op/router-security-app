import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Vulnerabilities from './Pages/Vulnerabilities';
import SecurityGuide from './Pages/SecurityGuide';
import Checklist from './Pages/Checklist';
import Credentials from './Pages/Credentials'; 
import Credconfig from './Pages/credconfig'
import Portconfig from './Pages/portconfig'
import Weakconfig from './Pages/Weakconfig'
import Open from  './Pages/Open'
import Weak from  './Pages/Weak'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vulnerabilities" element={<Vulnerabilities />} />
        <Route path="/security-guide" element={<SecurityGuide />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/credconfig" element={<Credconfig />} />
        <Route path="/portconfig" element={<Portconfig />} />
        <Route path="/weakconfig" element={<Weakconfig />} />
        <Route path="/open" element={<Open/>} />
        <Route path="/weak" element={<Weak />} />
      </Routes>
    </div>
  );
}

export default App;
