import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './fonts.css';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`

body {
	background-color: rgb(252, 253, 217);
	--transition-delay: .25s;
	margin: 0;
	padding: 0;
  border:0;
  font-family: "BebasNeue-Regular", cursive;
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
