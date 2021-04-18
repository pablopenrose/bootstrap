import React, { Component, useState } from 'react';
import HomePhotos from './Components/HomePhotos';
import {Card, Button} from 'react-bootstrap';
import Bio from './Components/Bio';
import EmailForm from './Components/EmailForm';
import Overview from './Components/Overview';
import Nav from './Components/Nav.js';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { csstransition } from 'react-transition-group'; 
import Footer from "./Components/Footer";
import CV from "./Components/CV"
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
	
  return (
	  <div style={{maxWidth: "65%", margin: "auto"}}>
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/overview" component={Overview} />
				<Route path="/bio" component={Bio} />
				<Route path="/cv" component={CV} />
			</Switch>
		</Router>
	    <Footer />
    </div>
  );

}

const Home = () => (
		<HomePhotos />
);

export default App;
