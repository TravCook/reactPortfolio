import './App.css';
import React from "react"
import Navbar from "./Components/navbar/navbar.js"
import LandingCard from "./Components/landingCard/landingCard.js"
import ProjectGrid from "./Components/projectGrid/projectGrid.js"
import AboutMe from "./Components/aboutMe/aboutMe.js"
import ContactMe from "./Components/contactMe/contactMe.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <div className="contianer-fluid app">
        <Navbar />
        <>
          <Route  exact path="/" component = { LandingCard } />
          <Route  exact path="/work" component = { ProjectGrid } />
          <Route  exact path="/aboutme" component = { AboutMe } />
          <Route  exact path="/contact" component ={ ContactMe } />
        </>
      </div>
    </Router>
  );
}


export default App;
