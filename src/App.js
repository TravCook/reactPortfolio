import './App.css';
import React, {Component} from "react"
import Navbar from "./Components/navbar/navbar.js"
import LandingCard from "./Components/landingCard/landingCard.js"
import ProjectGrid from "./Components/projectGrid/projectGrid.js"
import AboutMe from "./Components/aboutMe/aboutMe.js"
import ContactMe from "./Components/contactMe/contactMe.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap"
import LargeViewPl from "./Components/largeViewPL/largeViewPL"
import projectNavbar from "./Components/projectNavbar/projectNavbar.js"
import LargeViewCampify from "./Components/largeViewCampify/largeViewCampify.js"
import LargeViewCelest from "./Components/largeViewCelest/largeViewCelest.js"
import LargeViewNoteTaker from "./Components/largeViewNoteTaker/largeViewNoteTaker.js"

function App(){
    return (
      <Router>
        <Navbar />
        <Route exact path="/work/plbuilder" component = {projectNavbar} />
        <Route exact path="/work/campify" component = {projectNavbar} />
        <Route exact path="/work/celestnav" component = {projectNavbar} />
        <Route exact path="/work/NoteTaker" component = {projectNavbar} />
        <div className="contianer-fluid app">
          <>
            <Route  exact path="/" component = { LandingCard } />
            <Route  exact path="/work" component = { ProjectGrid } />
            <Route  exact path="/work/plbuilder" component = {LargeViewPl} />
            <Route  exact path="/work/campify" component = {LargeViewCampify} />
            <Route  exact path="/work/celestnav" component = {LargeViewCelest} />
            <Route  exact path="/work/NoteTaker" component = {LargeViewNoteTaker} />
            <Route  exact path="/aboutme" component =  {AboutMe}  />
            <Route  exact path="/contact" component ={ ContactMe } />
          </>
        </div>
      </Router>
    );
}


export default App;
