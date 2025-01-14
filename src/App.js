import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container mx-auto p-4 bg-gray-100'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/06_resume_builder" element={<Main />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
