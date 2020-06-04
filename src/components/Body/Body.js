import React, { Component } from 'react';

import background from '../../images/mortimer-background.jpg';
import name from '../../images/mortimer-svg.svg';
import styled from 'styled-components';
import Menu from './Menu';
import About from './About';
import Gallery from './Gallery';
import Work from './Work';

const Container = styled.div`
	height: 100%;

	overflow: hidden;
`;
const Background = styled.div`
	background-image: url(${name}), url(${background});

	height: 100vh;
	background-size: 161px, cover;
	background-position: 61% 40%, center;
	max-height: 100%;
	background-repeat: no-repeat;
	width: 100%;
	background-blend-mode: multiply;
	mix-blend-mode: overlay, none;
	@media (max-width: 414px) {
		background-position: 91% 36%, center;
	}
`;
export default class Body extends Component {
	render() {
		return (
			<Container>
				<Background />

				<About />

				<Menu />
				<Work />
				<Gallery />
			</Container>
		);
	}
}
