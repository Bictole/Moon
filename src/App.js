import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main"
import Energy from "./components/Energy"
import Timeline from './components/Timeline'
import Facility from './components/Facility';

import Team from './components/Team';
import Hackathon from './components/Hackathon';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/energy' element={<Energy />} />
        <Route exact path='/timeline' element={<Timeline />} />
        <Route exact path='/facility' element={<Facility />} />

        <Route exact path='/team' element={<Team />} />
        <Route exact path='/hackathon' element={<Hackathon />} />

      </Routes>
    </Router>
    
  );
}

export default App;
