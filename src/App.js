import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import './fonts.css';

const GlobalStyle = createGlobalStyle`

body {
	background-color: rgb(252, 253, 217);
  min-height: 100%;
    margin: 0;
    max-width: 100%;
    overflow-x: hidden;
  
p{
  font-size: 1.2em;
  letter-spacing: 0.6px;
}
	--transition-delay: .25s;
	width: 100%;
    height: 100%;
  
  font-family: "BebasNeue-Regular", cursive;
  box-sizing: border-box;
}

html {

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   -webkit-scrollbar:none;

}
@media
only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (min-device-pixel-ratio: 1.5){

  html,
  body{
    width:100%;
    overflow-x:hidden;
  }

}

*{
	margin: 0px;
    padding: 0px;
	box-sizing: border-box;
  width:100%;
    overflow-x:hidden;
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
