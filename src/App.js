import React, { Component } from 'react';
import './App.css';
// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components 
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Nav />
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
				</div>
			</Router>	
		);
	}
}

export default App;
