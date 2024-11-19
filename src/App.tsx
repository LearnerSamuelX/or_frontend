import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
// import PersonalInfo from './components/PersonalInfo';
// import ResidentialInfo from './components/ResidentialInfo';
import Application from './pages/Application';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/application/:id/i" element={<PersonalInfo />} />
          <Route path="/application/:id/ii" element={<ResidentialInfo />} /> */}
          <Route path="/application/:id" element={<Application />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
