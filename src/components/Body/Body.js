import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import background from '../../images/mortimer-background.jpg';
import name from '../../images/mortimer-name.jpg';
import styled from 'styled-components';
import Menu from './Menu';
import About from './About';
//import { Map, Market, GoogleApiWrapper } from 'google-maps-react';

const Background = styled.img`
	width: 100%;
	height: 791px;
	z-index: 1;
`;

const Name = styled.img`
	z-index: 2;
	position: absolute;
	mix-blend-mode: darken;
	left: 395.5px;
	top: 160px;
	transform: rotate(-39deg);
`;
const Container = styled.div`
	height: 100%;
	max-height: 100%;

	width: 100%;
`;
export default class Body extends Component {
	render() {
		return (
			<Col lg={12}>
				<Container>
					<Background src={background} />
					<Name src={name} />
				</Container>
				<Menu />
				<About />
			</Col>
		);
	}
}
