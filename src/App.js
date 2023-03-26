import './App.css';
import Welcome from "./components/welcome";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';



function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
    </Router>
    </div>
  );

}

export default App;
