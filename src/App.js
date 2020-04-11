import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`

body {
	background-color: rgb(252, 253, 217);
	font-family: Source Sans Pro, sans-serif;
	--transition-delay: .25s;
	margin: 0;
	padding: 0;
  border:0;
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
