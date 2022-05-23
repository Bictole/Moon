import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main"
import Energy from "./components/Energy"

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/energy' element={<Energy />} />
      </Routes>
    </Router>
    
  );
}

export default App;
