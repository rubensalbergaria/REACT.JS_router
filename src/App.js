import React, {useState, useEffect} from "react";
import './App.css';

import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Main from "./pages/Main";

import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (   
        <Router> 
          <Route path="/" exact render={(props)=> <Main/>}/>
          <Route path="/login" render={(props)=> <Login/>}/>
          <Route path="/aboutus" render={(props)=> <AboutUs/>}/>
        </Router>   
    );
}

export default App;
