import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Counter from "./components/Counter";
import Editor from "./components/Editor";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='border border-black bg-black'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/06_resume_builder" element={<Main />} />
        <Route path="/06_resume_builder/counter" element={<Counter />} />
        <Route path="/06_resume_builder/editor" element={<Editor />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
