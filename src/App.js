import React from 'react';
import './App.css';
import AppBar from './components/AppBar'
import Home from './components/Home'
import Action from './components/Action'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppBar/>
      <Route path="/" exact component={Home} />
      <Route path="/action" exact component={Action} />
    </Router>
  );
}

export default App;
