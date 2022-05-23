import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  const location = useLocation()
  
  return (
    <div className="App">
      <Header />
      <Home />2
    </div>
  );
}

export default App;
