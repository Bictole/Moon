import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main"
import Energy from "./components/Energy"
import Timeline from './components/Timeline'
import Facility from './components/Facility';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/energy' element={<Energy />} />
        <Route exact path='/timeline' element={<Timeline />} />
        <Route exact path='/facility' element={<Facility />} />
      </Routes>
    </Router>
    
  );
}

export default App;
