import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main"
import Energy from "./components/Energy"
import Timeline from './components/Timeline'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/energy' element={<Energy />} />
        <Route exact path='/timeline' element={<Timeline />} />
      </Routes>
    </Router>
    
  );
}

export default App;
