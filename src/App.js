import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import './fonts.css';

const GlobalStyle = createGlobalStyle`

body {
	background-color: rgb(252, 253, 217);
	--transition-delay: .25s;
	width: 100%;
    height: 100%;
    
    overflow-x: hidden; 
  font-family: "BebasNeue-Regular", cursive;

}
}


*{
	margin: 0px;
    padding: 0px;
	overflow-x: hidden; 
	
}



`;

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<GlobalStyle />
					<LandingPage />
				</div>
			</Router>
		);
	}
}
